const fs = require('fs');
const { countries } = JSON.parse(fs.readFileSync('./countries.json'));

const API_REQUEST = 'https://climateaction.unfccc.int/apiv2/actor/country/'

const apiCalls = countries.map(country => API_REQUEST + country.countryISO3);

try {
  fs.writeFileSync('./countryCalls.txt', apiCalls.join('\n'));
} catch (err) {
  console.error(err);
}
