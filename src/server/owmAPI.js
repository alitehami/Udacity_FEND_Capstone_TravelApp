const apiKey = process.env.OWM_KEY;
const apiCall = (zip, country, units, apikey = apiKey) => {
  return `http://api.openweathermap.org/data/2.5/weather?zip=${zip},${country}&units=${units}&appid=${apikey}`;
};

//jsdom to convert web scraped text into DOM
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

//the node-fetch library, to run fetch() in node.js
const fetch = require("node-fetch");

  async function getCountriesCodesList() {
    const url = "https://www.iban.com/country-codes";
    try {
      const response = await fetch(url);
      const htmlText = await response.text();
      const dom = await new JSDOM(htmlText);
      const doc = dom.window.document;
      const countries = [];
      const codes = [];
  
      const table = doc.querySelector(
        "table#myTable.table.table-bordered.downloads.tablesorter"
      );
      let [, ...rows] = table.querySelectorAll("tr");
  
      rows.forEach((tr) => {
        countries.push(tr.children[0].textContent);
        codes.push(tr.children[1].textContent);
      });
      // console.log(countries, codes);
      return { countries, codes };
    } catch (error) {
      console.error(
        `An Error Happened While Loading the external Country Codes list\n${error}`
      );
    }
  }
  
//server-test the getCountriesCodesList() method
//  const countriesList = getCountriesCodesList().then((result) => {
  //   // console.log(result.countries);
  //   response.send(result);
  // });
  //#

//#yellow
//fetching data from the Open Weather Map website API
async function OpenWeatherMapApiCall(zip, country, units) {
  let url = apiCall(zip, country, units);
  console.log(url);
  try {
    const response = await fetch(url);
    let jsonData = null;
    await response.json().then((r) => {
      jsonData = r;
    });
    // console.log(jsonData);
    return jsonData;
  } catch (error) {
    console.log(error);
  }
}
//#

const owmAPI =
  `http://api.openweathermap.org/data/2.5/weather?zip=3000,AU&units=metric&appid=${process.env.OWM_KEY}`;

async function getOWM() {
  const getData = await fetch(owmAPI);
  const weather = await getData.json();
  return weather;
}

module.exports = {apiCall,getOWM,OpenWeatherMapApiCall,getCountriesCodesList};