const configs = require("../config.js");
const axios = require('axios');

const fetchGenreData = async () => {
    return axios({
        url: "https://api.igdb.com/v4/genres",
        method: 'POST',
        headers: configs.igdbHeaders,
        data: "limit 50; fields *;"
    })
    .then(response => {
        return (response.data);
    }).catch(err => console.error("Error fetching data from IGDB API: ", err));
};

module.exports = { fetchGenreData }
