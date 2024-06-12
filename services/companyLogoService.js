const axios = require('axios');
const { CompanyLogo } = require('./dbService');
const configs = require("../config");
const company = require('../models/company');

//Fetch Company Logos from IGDB
const fetchCompanyLogoData = async () => {
    try {
        const response = await axios({
            url: "https://api.igdb.com/v4/company_logos",
            method: 'POST',
            headers: configs.igdbHeaders,
            data: "limit 100; fields *;"
        });

        const data = response.data;

        const parsedData = data.map(companyLogo => ({
            id: companyLogo.id,
            alpha_channel: companyLogo.alpha_channel,
            animated: companyLogo.animated,
            height: companyLogo.height,
            width: companyLogo.width,
            image_id: companyLogo.image_id,
            url: companyLogo.url
        }))

        return parsedData;
    } catch (err) {
        console.error("Error fetching company logo data from IGDB Database: ", err);
    }
}

//Sync Genres to PSQL DB
const syncCompanyLogosWithDatabase = async () => {
    const companyLogos = await fetchCompanyLogoData();
    console.log(companyLogos);

    if(companyLogos.length === 0){
        console.log("No company Logos to sync.");
        return;
    }

    for (const companyLogo of companyLogos){
        try {
            //Update Database
            await CompanyLogo.create(companyLogo);
            console.log('Company Logo successfully synced with the database.');
        } catch (error) {
            //Report Error
            console.error("Error syncing Company Logo with the database, skipping entry: ", error);
        }
    }    
}

//Reveal Sync Method
module.exports = {syncCompanyLogosWithDatabase}