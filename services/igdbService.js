import { headersConfig } from "../config.js"

const axios = require('axios');

const fetchGenreData = async () => {
    axios({ 
        url: "https://api.igdb.com/v4/genres",
        method: 'POST',
        headers: headersConfig,
        data: "limit 100; fields *;"
    })
    .then(response =>{
        const genres = response.data.map(genre =>({
            id: genre.id,
            name: genre.name,
            updated_at: genre.updated_at
        }))
        console.log(genres);
    }).catch(err => console.error("Error fetching data from IGDB API: ", err));
};

export {fetchGenreData}
