require("dotenv").config();
const express = require("express");
const router = express.Router();
const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args));

const disciplines = {
  bareback: "bareback",
  barrelracing: "barrel+racing",
  breakaway: "breakaway",
  bullriding: "bull+riding",
  saddlebronc: "saddle+bronc",
  steerwrestling: "sw",
  tiedown: "td",
  teamroping: "team+roping",
};

Object.entries(disciplines).forEach(([route, discipline]) => {
  router.get(`/${route}`, async function (req, res, next) {
    const apiUrl = `https://sheets.googleapis.com/v4/spreadsheets/1Hh80fboDcDqMoIojoF6TOpee9IKKgFuhsN1nCutv5bo/values/${discipline}?alt=json&key=${process.env.TETON_RIDGE_GOOGLE_SHEETS_API_KEY}`;

    try {
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`Google Sheets API request failed with status ${response.status}`);
      }

      const data = await response.json();
      res.status(200).json({ values: data.values });
    } catch (error) {
      console.error("Error fetching data from Google Sheets API:", error);
      // Handle error and render an appropriate response
      res.render("error", { message: "Error fetching data from Google Sheets API", error });
    }
  });
});

module.exports = router;
