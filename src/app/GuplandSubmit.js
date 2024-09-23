// components/MyComponent.tsx
const puppeteer = require("puppeteer");

const handlePuppeteerTask = async (formdata) => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto("https://gupland.com/submit-deal");
  // Optional: Add any additional actions you want the script to perform on the page
  // For example, filling out a form or clicking a button.
  // Fill out the form fields (replace with actual element IDs)
  await page.type("#form1_name", "Charlie Steele");
  await page.type("#form1_email", "closing@cashlandbuyerusa.com");
  //property address
  await page.type("#form1_textarea8", `${formdata.Address}`);
  await page.type("#form1_text9", `${formdata.APN}`);
  await page.type("#form1_text9copy60ye", `${formdata.County}`);
  await page.type("#form1_text9copy60yecopyezy5", `${formdata.State}`);
  await page.type("#form1_url10", `${formdata.PropertyWebLink}`);
  //property under contract
  await page.click('input[type="radio"][value="Yes"]');
  // const fileElement = await page.waitForSelector("#form1_fileupload43");
  // await fileElement.uploadFile(["./path-to-local-file"]);
  await page.type("#form1_text12", `${formdata.ContractPrice}`);
  await page.type("#form1_text7", `${formdata.ClosingDate}`);
  await page.type("#form1_text16", `${formdata.AcquisitionCost}`);
  await page.type("#form1_text16copy6wwz", `${formdata.AdditionalCost}`);
  await page.type("#form1_text16copy6wwzcopysinb", `${formdata.SalePrice}`);
  await page.type("#form1_textarea19", `${formdata.SolcComps}`);
  await page.type("#form1_textarea19copyo9k3", `${formdata.SaleComps}`);
  await page.type("#form1_text21", `${formdata.ClosingCost}`);
  await page.type("#form1_text21copyp86e", `${formdata.Profit}`);
  //disposition:other
  await page.click('input[type="radio"][value="Other"]');
  await page.type("#form1_textarea30", `${formdata.SaleTimeline}`);
  await page.type("#form1_textarea26", `${formdata.RealtorName}`);
  await page.type("#form1_textarea26copyl2wp", `${formdata.RealtorContact}`);
  //residential zoning
  await page.click(`input[type="radio"][value=${formdata.Zoning}]`);
  // lot buildable yes
  await page.click(`input[type="radio"][value=${formdata.Buildable}]`);
  // land topography flat

  await page.click(`input[type="radio"][value=Flat]`);
  await page.type("#form1_text32", `${formdata.LotSize}`);
  await page.type("#form1_textarea35", `${formdata.Electric}`);
  await page.type("#form1_textarea35copyslw4copyxdn0", `${formdata.Water}`);
  await page.type("#form1_textarea35copyslw4", `${formdata.Sewer}`);

  // property access legal
  await page.click(`input[type="radio"][value=${formdata.Access}]`);
  // await page.type("#form1_textarea39", "Additional Details");
  //   await page.click('button[type="submit"]');

  // Wait for the page to load after submission
  //   await page.waitForNavigation();

  //   // Do something with the response, if necessary
  //   const response = await page.evaluate(
  //     () => document.querySelector(".success-message").textContent
  //   );
  //   console.log(response);

  await browser.close();
};

module.exports = handlePuppeteerTask;
