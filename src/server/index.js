const dotenv = require("dotenv").config();
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { text } = require("body-parser");
const { response } = require("express");

const app = express();
app.use(cors());

// to use json
app.use(bodyParser.json());

// to use url encoded values
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.static("dist"));
app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

app.listen(8081, function () {
  console.log("<<<<<<<<<<<<<<<<<<<<  restarted  >>>>>>>>>>>>>>>>>>>");
  console.log("Example app listening on http://localhost:8081");
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Setup empty JS object to act as endpoint for all routes
const projectData = [];

const owm = require("./owmAPI");

app.get("/countriesList", (request, response) => {
  owm.getCountriesCodesList().then((result) => {
    console.log(result.countries);
    response.send(result);
  });
});

app.post("/addWeatherRequest", async (request, response) => {
  let data = request.body;
  // console.log(data);

  console.log(`----\nNew Entry Recieved`);
  let res = await owm.OpenWeatherMapApiCall(
    data.zipCode,
    data.countryCode,
    data.selectedUnits
  );
  data.weather = res;
  data.apiCallURL = owm.apiCall(
    data.zipCode,
    data.countryCode,
    data.selectedUnits,
    "{APIKEY}"
  );
  projectData.push(data);

  console.log(
    `RESULT VALIDATION :\n${data.weather.cod}\n${data.weather.message}\n${data.weather.name}`
  );
  response.send(res);
});

app.get("/getLastEntry", async (request, response) => {
  let i = projectData.length;
  console.log(`\nGET REQUEST FOR LAST ENTRY\nall recorded entries (${i}):`);
  let sendData = false;
  if (i !== 0) {
    sendData = projectData[i - 1];
  }

  //debug check for all entries
  projectData.forEach((x) => {
    console.log(x.weather.cod);
  });
  console.log("-----");
  response.send(sendData);
});

app.get("/owmMelbourne", (request, response) => {
  owm.getOWM().then((x) => {
    console.log("GET owm melbourne recieved....");
    console.log(x);
    response.json(x);
  });
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// server-test the getCountriesCodesList() method
// const countriesList = owm.getCountriesCodesList().then((result) => {
//   console.log(result);
// });
