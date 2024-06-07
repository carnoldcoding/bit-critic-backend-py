const axios = require('axios');
const { Game, Genre, sequelize } = require('./dbService');
const configs = require("../config");

//Fetch Genres from IGDB
const fetchGameData = async () => {
    try {
        const response = await axios({
            url: "https://api.igdb.com/v4/games",
            method: 'POST',
            headers: configs.igdbHeaders,
            data: "limit 200; fields *; where category = 0 & cover != null & platforms = (4, 5, 6, 7, 8, 9, 11, 12, 18, 19, 20, 21, 22, 23, 24, 33, 37, 38, 41, 46, 48, 49);"
        });

        const data = response.data;

        const parsedData = data.map(game => ({
            id: game.id,
            name: game.name,
            category_id: game.category,
            cover_id: game.cover,
            slug: game.slug,
            storyline: game.storyline,
            summary: game.summary,
            status: game.status,
            rating: 0,
            rating_count: 0,
            external_rating: game.aggregated_rating,
            external_rating_count: game.aggregated_rating_count,
            igdb_rating: game.rating,
            igdb_rating_count: game.rating_count,
            genres: game.genres
        }))
        return parsedData;
    } catch (err) {
        console.error("Error fetching genre data from IGDB Database: ", err);
    }
}

//Sync Genres to PSQL DB
const syncGamesWithDatabase = async () => {
    const games = await fetchGameData();
    //console.log(games);

    if(games.length === 0){
        console.log("No games to sync.");
        return;
    }

    try {
        await sequelize.transaction(async (transaction) => {
            for (const gameData of games) {
                const { genres, ...gameFields } = gameData;

                // Upsert game
                const [game] = await Game.upsert(gameFields, { transaction });

                if (genres && genres.length > 0) {
                    // Upsert genres and create associations
                    for (const genreId of genres) {
                        const [genre] = await Genre.findOrCreate({
                            where: { id: genreId },
                            defaults: { id: genreId },
                            transaction
                        });
                        await game.addGenre(genre, { transaction });
                    }
                }
            }
        });
        console.log('Games and genres successfully synced with the database.');
    } catch (error) {
        console.error("Error syncing games and genres with the database: ", error);
    }
}

//Reveal Sync Method

module.exports = {syncGamesWithDatabase}