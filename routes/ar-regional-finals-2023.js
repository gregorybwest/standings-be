require("dotenv").config();
const express = require("express");
const router = express.Router();
const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args));

const fetchSheetData = async (sheetId, discipline, res) => {
  const apiUrl = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${discipline}?alt=json&key=${process.env.TETON_RIDGE_GOOGLE_SHEETS_API_KEY}`;

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
};

const disciplineRoutes = {
  bareback: "bareback",
  barrelracing: "barrel+racing",
  breakaway: "breakaway",
  bullriding: "bull+riding",
  saddlebronc: "saddle+bronc",
  steerwrestling: "sw",
  tiedown: "td",
  teamroping: "team+roping",
};

Object.entries(disciplineRoutes).forEach(([route, discipline]) => {
  router.get(`/central/${route}`, async function (req, res, next) {
    await fetchSheetData("1Bvv_V6AamPO0oVB6vkn3vdvFmXcwgLROwAboPhWwxLk", discipline, res);
  });
});

Object.entries(disciplineRoutes).forEach(([route, discipline]) => {
  router.get(`/east/${route}`, async function (req, res, next) {
    await fetchSheetData("1hSDZ_BRMUt3upn4YzElMyGj_dzi9GwUiDOEr9hH5HFQ", discipline, res);
  });
});

Object.entries(disciplineRoutes).forEach(([route, discipline]) => {
  router.get(`/west/${route}`, async function (req, res, next) {
    await fetchSheetData("1hV4_aH7TlGQV7zPpQY4YHsh_iK_VxnNwIVQLOK3vMyw", discipline, res);
  });
});

module.exports = router;
