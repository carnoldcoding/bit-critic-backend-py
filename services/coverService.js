const axios = require('axios');
const { Cover } = require('./dbService');
const configs = require("../config");

//Fetch Genres from IGDB
const fetchCoverData = async () => {
    try {
        const response = await axios({
            url: "https://api.igdb.com/v4/covers",
            method: 'POST',
            headers: configs.igdbHeaders,
            data: "limit 500; fields *;"
        });

        const data = response.data;

        const parsedData = data.map(cover => ({
            id: cover.id,
            game_id: cover.game,
            height: cover.height,
            width: cover.width,
            url: cover.url,
            image_id: cover.image_id
        }))

        return parsedData;
    } catch (err) {
        console.error("Error fetching cover data from IGDB Database: ", err);
    }
}

//Sync Covers to PSQL DB
const syncCoverWithDatabase = async () => {
    const covers = await fetchCoverData();
    console.log(covers);

    try {
        //Update Database
        await Cover.bulkCreate(covers, {
            updateOnDuplicate: ['url', 'image_id']
        });
        console.log('Cover successfully synced with the database.');
    } catch (error) {
        //Report Error
        console.error("Error syncing cover with the database: ", error);
    }
}

//Reveal Sync Method
module.exports = {syncCoverWithDatabase}