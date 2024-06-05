const igdbController = require("./controllers/igdbController.js");

igdbController.parseGenreData()
    .then(data => {
        data ? console.log(data) : console.log("No data");
    })
    .catch(err => {
        console.error("Failed to fetch genre data: ", err);
    })