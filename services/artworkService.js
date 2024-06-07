const axios = require('axios');
const { Artwork } = require('./dbService');
const configs = require("../config");

//Fetch Genres from IGDB
const fetchArtworkData = async () => {
    try {
        const response = await axios({
            url: "https://api.igdb.com/v4/artworks",
            method: 'POST',
            headers: configs.igdbHeaders,
            data: "limit 500; fields *;"
        });

        const data = response.data;

        const parsedData = data.map(artwork => ({
            id: artwork.id,
            game_id: artwork.game,
            height: artwork.height,
            width: artwork.width,
            url: artwork.url,
            image_id: artwork.image_id
        }))

        return parsedData;
    } catch (err) {
        console.error("Error fetching artwork data from IGDB Database: ", err);
    }
}

//Sync Artwork to PSQL DB
const syncArtworkWithDatabase = async () => {
    const artwork = await fetchArtworkData();
    console.log(artwork);

    try {
        //Update Database
        await Artwork.bulkCreate(artwork, {
            updateOnDuplicate: ['url', 'image_id']
        });
        console.log('Artwork successfully synced with the database.');
    } catch (error) {
        //Report Error
        console.error("Error syncing artwork with the database: ", error);
    }
}

//Reveal Sync Method
module.exports = {syncArtworkWithDatabase}