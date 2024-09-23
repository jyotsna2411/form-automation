const express = require("express");
const app = express();
const axios = require("axios");
const handlePuppeteerTask = require("./src/app/GuplandSubmit");

app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});
app.post("/trigger-puppeteer", async (req, res) => {
  const formData = req.body.formData;
  console.log(formData);
  try {
    await handlePuppeteerTask(formData);
    res.set("Content-Disposition", "attachment; filename=example.pdf");
    res.set("Content-Type", "application/json");
    res.status(200).send("Form Submitted Successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error triggering Puppeteer");
  }
});

app.listen(8000, () => {
  console.log("Server listening on port 8000");
});
