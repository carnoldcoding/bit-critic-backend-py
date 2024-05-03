const { Client } = require('pg');

const psql = new Client({
    user: "logia",
    host: "localhost",
    database: "bit_critic",
    password: "Consigli3r3",
    port: 5432
});

const headersConfig = {
  'Accept': 'application/json',
  'Client-ID': 'cba76950mi1uis39f4edeim3x7b8vc',
  'Authorization': 'Bearer lgf1c4gzdncsb7wzdcqu816ujcsmx7',
};

export {psql, headersConfig}
