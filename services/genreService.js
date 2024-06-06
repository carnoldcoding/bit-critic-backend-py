const axios = require('axios');
const { Genre } = require('./dbService');
const configs = require("../config");

//Fetch Genres from IGDB
const fetchGenreData = async () => {
    try {
        const response = await axios({
            url: "https://api.igdb.com/v4/genres",
            method: 'POST',
            headers: configs.igdbHeaders,
            data: "limit 50; fields *;"
        });

        const data = response.data;

        const parsedData = data.map(genre => ({
            id: genre.id,
            name: genre.name,
            slug: genre.slug,
            updated_at: genre.updated_at
        }))

        return parsedData;
    } catch (err) {
        console.error("Error fetching genre data from IGDB Database: ", err);
    }
}

//Sync Genres to PSQL DB
const syncGenresWithDatabase = async () => {
    const genres = await fetchGenreData();
    console.log(genres);

    if(genres.length === 0){
        console.log("No genres to sync.");
        return;
    }

    try {
        //Update Database
        await Genre.bulkCreate(genres, {
            updateOnDuplicate: ['name', 'slug', 'updated_at']
        });
        console.log('Genres successfully synced with the database.');
    } catch (error) {
        //Report Error
        console.error("Error syncing genres with the database: ", error);
    }
}

//Reveal Sync Method

module.exports = {syncGenresWithDatabase}