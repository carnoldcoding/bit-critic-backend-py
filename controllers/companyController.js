const CompanyService = require('../services/companyService');

// handle request to API (Controllers direct incoming requests)
const syncCompanies = async () => {
    await CompanyService.syncCompanyWithDatabase();
};

module.exports = { syncCompanies };