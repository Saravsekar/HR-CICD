import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';

const testdata = JSON.parse(JSON.stringify(require('../dataset/LoginPage.json')))
const VD = JSON.parse(JSON.stringify(require('../dataset/VerificationDetails.json')))
const CS = JSON.parse(JSON.stringify(require('../dataset/CategoryAndSubcategory.json')))

test('Verify whether the case created in Me@Woolies with Career and Recruitment Cateogry and Wage Costing Report as subcategory is getting assigned to Advisory Payroll queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);

    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        await home.navigationToCase();
        await home.selectListViewedDropdown(testdata.wps);
        caseNumber = await home.wpsGetCaseNumber();
        console.log(caseNumber);
        homePage = await home.hrUserLogin(testdata.nzLoginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Case Verification', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForWoolworthsNZ(testdata.searchWoolworthsNZ);
        await home1.clickOnWoolworthsNZ();
        // await home1.pageReload();
        await home1.clcikOnGlobalSearch();
        await home1.enterTheCaseNumber(caseNumber);
        await home1.caseVerification();

        await homePage.close();
    });
});

test('Verification of ER Case', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);

    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        await home.navigationToCase();
        await home.selectListViewedDropdownER(testdata.er);
        caseNumber = await home.wpsGetCaseNumber();
        console.log(caseNumber);
        homePage = await home.hrUserLogin(testdata.nzLoginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Case Verification', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForWoolworthsNZ(testdata.searchWoolworthsNZ);
        await home1.clickOnWoolworthsNZ();
        // await home1.pageReload();
        await home1.clcikOnGlobalSearch();
        await home1.enterTheCaseNumber(caseNumber);
        await home1.caseVerification();
        await homePage.close();
    });
});

