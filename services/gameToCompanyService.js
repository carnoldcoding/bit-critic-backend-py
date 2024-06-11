const axios = require('axios');
const { GameToCompany } = require('./dbService');
const configs = require("../config");
const gameToCompany = require('../models/gameToCompany');

//Fetch Genres from IGDB
const fetchGameToCompanyData = async () => {
    try {
        const response = await axios({
            url: "https://api.igdb.com/v4/involved_companies",
            method: 'POST',
            headers: configs.igdbHeaders,
            data: "limit 50; fields *;"
        });

        const data = response.data;

        const parsedData = data.map(gameToCompany => ({
            company_id: gameToCompany.id,
            game_id: gameToCompany.game,
            developer: gameToCompany.developer,
            porting: gameToCompany.porting,
            publishing: gameToCompany.publishing,
            supporting: gameToCompany.supporting
        }))

        return parsedData;
    } catch (err) {
        console.error("Error fetching gameToCompany data from IGDB Database: ", err);
    }
}

//Sync Genres to PSQL DB
const syncGameToCompanyWithDatabase = async () => {
    const gameToCompany = await fetchGameToCompanyData();
    console.log(gameToCompany);

    if(gameToCompany.length === 0){
        console.log("No gameToCompany to sync.");
        return;
    }

    for (const entry of gameToCompany) {
        try {
            await GameToCompany.upsert(entry, {
                conflictFields: ['id'],
                updateOnDuplicate: ['name', 'updated_at']
            });
            console.log(`Entry for gameToCompany ID ${entry.id} synced successfully.`);
        } catch (error) {
            console.error(`Error syncing entry with ID ${entry.id}:`, error.message);
            // Continue with the next entry
        }
    }
    console.log('gameToCompany successfully synced with the database.');
}

//Reveal Sync Method
module.exports = {syncGameToCompanyWithDatabase}