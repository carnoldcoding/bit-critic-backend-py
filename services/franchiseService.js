const axios = require('axios');
const { Franchise } = require('./dbService');
const configs = require("../config");

//Fetch Genres from IGDB
const fetchFranchiseData = async () => {
    try {
        const response = await axios({
            url: "https://api.igdb.com/v4/franchises",
            method: 'POST',
            headers: configs.igdbHeaders,
            data: "limit 100; fields *;"
        });

        const data = response.data;

        const parsedData = data.map(franchise => ({
            id: franchise.id,
            name: franchise.name,
            slug: franchise.slug,
            url: franchise.url
        }))

        return parsedData;
    } catch (err) {
        console.error("Error fetching franchise data from IGDB Database: ", err);
    }
}

//Sync Genres to PSQL DB
const syncFranchisesWithDatabase = async () => {
    const franchises = await fetchFranchiseData();
    console.log(franchises);

    if(franchises.length === 0){
        console.log("No franchises to sync.");
        return;
    }

    for (const franchise of franchises){
        try {
            //Update Database
            await Franchise.create(franchise);
            console.log('franchise successfully synced with the database.');
        } catch (error) {
            //Report Error
            console.error("Error syncing franchise with the database: ", error);
        }
    }    
}

//Reveal Sync Method
module.exports = {syncFranchisesWithDatabase}