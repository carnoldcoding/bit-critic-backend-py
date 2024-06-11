const axios = require('axios');
const { Company } = require('./dbService');
const configs = require("../config");

//Fetch Genres from IGDB
const fetchCompanyData = async () => {
    try {
        const response = await axios({
            url: "https://api.igdb.com/v4/companies",
            method: 'POST',
            headers: configs.igdbHeaders,
            data: "limit 500; fields *;"
        });

        const data = response.data;

        const parsedData = data.map(company => ({
            id: company.id,
            name: company.name,
            changed_company_id: company.changed_company_id,
            country_code: company.country,
            description: company.description,
            logo_id: company.logo_id,
            parent_company_id: company.parent,
            slug: company.slug,
            url: company.url
        }))

        return parsedData;
    } catch (err) {
        console.error("Error fetching company data from IGDB Database: ", err);
    }
}

//Sync companies to PSQL DB
const syncCompanyWithDatabase = async () => {
    const companies = await fetchCompanyData();
    console.log(companies);

    try {
        //Update Database
        await Company.bulkCreate(companies, {
            updateOnDuplicate: ['url', 'image_id']
        });
        console.log('company successfully synced with the database.');
    } catch (error) {
        //Report Error
        console.error("Error syncing company with the database: ", error);
    }
}

//Reveal Sync Method
module.exports = {syncCompanyWithDatabase}