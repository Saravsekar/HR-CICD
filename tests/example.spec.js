// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  // await page.goto('https://playwright.dev/');

  // // Expect a title "to contain" a substring.
  // await expect(page).toHaveTitle(/Playwright/);
  let caseNumber = "Case Number 03081698";
  let number = caseNumber.replace("Case Number", "").trim();
  console.log(number);
});

test('get started link', async ({ page }) => {
  const testdata = JSON.parse(JSON.stringify(require('../dataset/VerificationDetails.json')));
  for (const details of testdata.category.CareerAndRecruitment) {
    // Extract user information from the JSON
    const { recordType, caseOwner, priority, category, subCat } = details;
    console.log(details.subcat1);

    console.log('recordType: ${recordType}');
    console.log('recordType:', details.subcat1.recordType);
    console.log('caseOwner:', caseOwner);
    console.log('priority:', priority);
    console.log('category:', category);
    console.log('subCat:', subCat);

  }

  // let category = testdata[1];
  // console.log(category, "category");

  // for (let i = 0; i < category.length; i++) {
  //   let subCat = category[i];
  //   console.log('0-', subCat);

  //   for (let j = 0; j < subCat.length(); j++) {
  //     console.log('1-', subCat[j].caseOwner);
  //     console.log(subCat[j].recordType);
  //   }
  // }
});
