require("dotenv").config();
const express = require("express");
const router = express.Router();
const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args));

router.get("/bareback", async function (req, res, next) {
  const barebackData = `https://sheets.googleapis.com/v4/spreadsheets/1Hh80fboDcDqMoIojoF6TOpee9IKKgFuhsN1nCutv5bo/values/bareback?alt=json&key=${process.env.TETON_RIDGE_GOOGLE_SHEETS_API_KEY}`;

  try {
    const response = await fetch(barebackData);

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

router.get("/barrelracing", async function (req, res, next) {
  const barrelRacingData = `https://sheets.googleapis.com/v4/spreadsheets/1Hh80fboDcDqMoIojoF6TOpee9IKKgFuhsN1nCutv5bo/values/barrel+racing?alt=json&key=${process.env.TETON_RIDGE_GOOGLE_SHEETS_API_KEY}`;

  try {
    const response = await fetch(barrelRacingData);

    if (!response.ok) {
      throw new Error(`Google Sheets API request failed with status ${response.status}`);
    }

    const data = await response.json();
    res.status(200).json({ values: data.values });
  } catch (error) {
    console.error("Error fetching data from Google Sheets API:", error);
    res.render("error", { message: "Error fetching data from Google Sheets API", error });
  }
});

router.get("/breakaway", async function (req, res, next) {
  const breakawayData = `https://sheets.googleapis.com/v4/spreadsheets/1Hh80fboDcDqMoIojoF6TOpee9IKKgFuhsN1nCutv5bo/values/breakaway?alt=json&key=${process.env.TETON_RIDGE_GOOGLE_SHEETS_API_KEY}`;

  try {
    const response = await fetch(breakawayData);

    if (!response.ok) {
      throw new Error(`Google Sheets API request failed with status ${response.status}`);
    }

    const data = await response.json();
    res.status(200).json({ values: data.values });
  } catch (error) {
    console.error("Error fetching data from Google Sheets API:", error);
    res.render("error", { message: "Error fetching data from Google Sheets API", error });
  }
});

router.get("/bullriding", async function (req, res, next) {
  const bullRidingData = `https://sheets.googleapis.com/v4/spreadsheets/1Hh80fboDcDqMoIojoF6TOpee9IKKgFuhsN1nCutv5bo/values/bull+riding?alt=json&key=${process.env.TETON_RIDGE_GOOGLE_SHEETS_API_KEY}`;

  try {
    const response = await fetch(bullRidingData);

    if (!response.ok) {
      throw new Error(`Google Sheets API request failed with status ${response.status}`);
    }

    const data = await response.json();
    res.status(200).json({ values: data.values });
  } catch (error) {
    console.error("Error fetching data from Google Sheets API:", error);
    res.render("error", { message: "Error fetching data from Google Sheets API", error });
  }
});

router.get("/saddlebronc", async function (req, res, next) {
  const saddleBroncData = `https://sheets.googleapis.com/v4/spreadsheets/1Hh80fboDcDqMoIojoF6TOpee9IKKgFuhsN1nCutv5bo/values/saddle+bronc?alt=json&key=${process.env.TETON_RIDGE_GOOGLE_SHEETS_API_KEY}`;

  try {
    const response = await fetch(saddleBroncData);

    if (!response.ok) {
      throw new Error(`Google Sheets API request failed with status ${response.status}`);
    }

    const data = await response.json();
    res.status(200).json({ values: data.values });
  } catch (error) {
    console.error("Error fetching data from Google Sheets API:", error);
    res.render("error", { message: "Error fetching data from Google Sheets API", error });
  }
});

router.get("/steerwrestling", async function (req, res, next) {
  const steerWrestlingData = `https://sheets.googleapis.com/v4/spreadsheets/1Hh80fboDcDqMoIojoF6TOpee9IKKgFuhsN1nCutv5bo/values/sw?alt=json&key=${process.env.TETON_RIDGE_GOOGLE_SHEETS_API_KEY}`;

  try {
    const response = await fetch(steerWrestlingData);

    if (!response.ok) {
      throw new Error(`Google Sheets API request failed with status ${response.status}`);
    }

    const data = await response.json();
    res.status(200).json({ values: data.values });
  } catch (error) {
    console.error("Error fetching data from Google Sheets API:", error);
    res.render("error", { message: "Error fetching data from Google Sheets API", error });
  }
});

router.get("/tiedown", async function (req, res, next) {
  const tieDownData = `https://sheets.googleapis.com/v4/spreadsheets/1Hh80fboDcDqMoIojoF6TOpee9IKKgFuhsN1nCutv5bo/values/td?alt=json&key=${process.env.TETON_RIDGE_GOOGLE_SHEETS_API_KEY}`;

  try {
    const response = await fetch(tieDownData);

    if (!response.ok) {
      throw new Error(`Google Sheets API request failed with status ${response.status}`);
    }

    const data = await response.json();
    res.status(200).json({ values: data.values });
  } catch (error) {
    console.error("Error fetching data from Google Sheets API:", error);
    res.render("error", { message: "Error fetching data from Google Sheets API", error });
  }
});

router.get("/teamroping", async function (req, res, next) {
  const teamRopingData = `https://sheets.googleapis.com/v4/spreadsheets/1Hh80fboDcDqMoIojoF6TOpee9IKKgFuhsN1nCutv5bo/values/team+roping?alt=json&key=${process.env.TETON_RIDGE_GOOGLE_SHEETS_API_KEY}`;

  try {
    const response = await fetch(teamRopingData);

    if (!response.ok) {
      throw new Error(`Google Sheets API request failed with status ${response.status}`);
    }

    const data = await response.json();
    res.status(200).json({ values: data.values });
  } catch (error) {
    console.error("Error fetching data from Google Sheets API:", error);
    res.render("error", { message: "Error fetching data from Google Sheets API", error });
  }
});

module.exports = router;
