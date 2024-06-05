const igdbService = require("../services/igdbService.js");

const parseGenreData = async () => {
    return igdbService.fetchGenreData()
        .then(data => { return data })
        .catch(err =>  { return err });
}

module.exports = { parseGenreData };