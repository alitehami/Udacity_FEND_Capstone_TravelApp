<center>

# WetAlert
The Traveler Weather App
 <small> **Front-End Developer, Capstone project**, Udacity Nanodegree </small>

 </center>

---
## Introduction

> **Udacity**
"This project requires you to build out a travel app that, at a minimum, obtains a desired trip location & date from the user, and displays weather and an image of the location using information obtained from external APIs. Given that this is the Capstone project, it's highly encouraged for you to go above and beyond, adding additional functionality and customization to truly stand out with a project you are proud to have at the top of your portfolio!"
>
---

## Developemnt Process & TO-DO list:

1. [ ] Setup the initial project structure. i.e. src, server, client, views, styles, js..etc.
2. [ ] Get webpack set up to work with this project.
3. [ ] Create an account with Geonames, and setup to pull in Country & Location data.
4. [ ] Introduce a countdown from user's entered date of travel.
5. [ ] Create an account with Weatherbit, and setup to pull in Weather & Forecast data by Location.
6. [ ] Create an account with Pixabay, and setup to pull in images about the Location & Country.
7. [ ] *(bonus)* Adding Users Creation & Authentecation to store data per user and keep the user data stored in the server for future retrieval. (using bcrypt + Cookies/SessionStorage/LocalStorage)
8. [ ] *(bonus)* Integrate the REST Countries API to pull in data for the country being visited.
9. [ ] *(bonus)* Allow the user to add a todo list and/or packing list for their trip.

#### npm dependencies and libraries used:

- express
- webpack
- babel
- jest
- bcrypt
- dotenv
- nodemon

---

## Dev Notes, References & Resources

#### 1. APIs used in this project:

- [Geonames](http://www.geonames.org/export/web-services.html) to pull location and country name from user input (i.e. city name)
- [Weatherbit](https://www.weatherbit.io/account/create) to pull in the weather and forecast data.
- [Pixabay](https://pixabay.com/api/docs/) for pulling images.
- [REST Countries API](https://restcountries.eu/) to pull in data for the country in query.

---

#### 2. Articles and useful resources:

- [JWT with Cookies vs browserStorage
  (Cookies are more secure, article of JWT)](https://stormpath.com/blog/where-to-store-your-jwts-cookies-vs-html5-web-storage)
- [Regex to extract cookie value by parameter name](https://regex-tutorial.com/getCookieWithRegex.html)
- [How to Use Local Storage with JavaScript](https://www.taniarascia.com/how-to-use-local-storage-with-javascript/)
- [All About Cookies! options and usage](https://javascript.info/cookie)

##### 2.1 Tutorials for Authentications and web storage:

> <sub>[Web Dev Simplified - youtube channel](https://www.youtube.com/channel/UCFbNIlppjAuEX4znoulh0Cw)</sub>

- [JavaScript Cookies vs Local Storage vs Session](https://www.youtube.com/watch?v=GihQAC1I39Q)
- [Build Node.js User Authentication - Password Login (Hashing with bcrypt)](https://www.youtube.com/watch?v=Ud5xKCYQTjM)
- [Node.js Passport Login System Tutorial](https://www.youtube.com/watch?v=-RCnNyD0L-s)

#### 3. Other interesting stuff:

- [MetaWeather - Open key-free API for weather forecast](https://www.metaweather.com/api/ "Open key-free API for weather forecast")

---

> **Author**
>
> [Ali Tehami](https://www.linkedin.com/in/alitehami/ "linkedin profile")
