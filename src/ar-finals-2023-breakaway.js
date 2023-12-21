// // sheetsApi.js
// import fetch from "node-fetch";

// const url =
//   "https://sheets.googleapis.com/v4/spreadsheets/1Hh80fboDcDqMoIojoF6TOpee9IKKgFuhsN1nCutv5bo/values/breakaway?alt=json&key=${env.API_KEY}";

// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Host":
//       "https://sheets.googleapis.com/v4/spreadsheets/1Hh80fboDcDqMoIojoF6TOpee9IKKgFuhsN1nCutv5bo/values/breakaway?alt=json",
//     "X-RapidAPI-Key": "AIzaSyBiOijTW-ANat46p5c-n3aTi0E0J5cYpus",
//   },
// };

// // promise syntax
// fetch(url, options)
//   .then((res) => res.json())
//   .then((json) => console.log(json))
//   .catch((err) => console.error("error:" + err));
// // async await syntax
// try {
//   const res = await fetch(url, options);
//   const json = await res.json();
//   console.log(json);
// } catch (err) {
//   console.log(err);
// }

// const getSheetData = async () => {
//   // const API_KEY = process.env.API_KEY;
//   const spreadsheetId = "1Hh80fboDcDqMoIojoF6TOpee9IKKgFuhsN1nCutv5bo";
//   const sheetName = "breakaway";
//   const apiUrl = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}?alt=json&key=AIzaSyBiOijTW-ANat46p5c-n3aTi0E0J5cYpus`;

//   try {
//     const response = await fetch(apiUrl);

//     if (!response.ok) {
//       throw new Error(`Google Sheets API request failed with status ${response.status}`);
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error making Google Sheets API request:", error);
//     throw error;
//   }
// };

// export default { getSheetData };
