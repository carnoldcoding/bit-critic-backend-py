const CompanyLogoService = require("../services/companyLogoService");

// handle request to API (Controllers direct incoming requests)
const syncCompanyLogos = async () => {
    await CompanyLogoService.syncCompanyLogosWithDatabase();
};

module.exports = { syncCompanyLogos };