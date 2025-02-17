//import exp from "constants";
import { expect } from '@playwright/test';
import exp from 'constants';
export class HomePage {
    constructor(page) {
        this.page = page;
        this.setupButton = "div[class='setupGear'] a";
        this.setupButton2 = '#related_setup_app_home';
        this.searchBox = "//input[@title='Search Setup']";
        this.loginBtn = "(//input[@title='Login'])[1]";
        this.selectedMenu = "//a[@title='Home']";
        this.navMenu = "//button[@title='Show Navigation Menu']";
        this.navCase = "//a[@data-itemid='Case']";
        this.listViewedDropdown = "//button[@title='Select a List View: Cases']";
        this.listViewedSearch = "//input[@placeholder='Search lists...']"
        this.allCasesOption = "//span[text()='All Cases']"
        this.automationER = "//span[text()='QA Automation ER Case']"
        this.caseSelectionWPS = "(//a[@data-refid='recordId'])[1]"
        this.HRCaseNumber = "(//div[@data-target-selection-name='sfdc:RecordField.Case.CaseNumber'])[2]"
        this.homeMenu = '//ul[@role="menu"]//span[text()="Home"]';
        this.appLaunch = "//button[@title='App Launcher']";
        this.search = "(//input[@placeholder='Search apps and items...'])";
        this.MeAtWoolies = "//b[text()='Me@Woolies']"
        this.peopleServices = "//a[@data-label='PeopleServices']"
        this.woolWorthsNZ = "//b[text()='Woolworths NZ']"
        this.elementSelector = "//div[@class='slds-p-bottom--large']"
        this.peopleRequest = "(//span[@class='quick-action-name quick-action-Australia'])[2]"
        this.benefitTitle = "//h5[text()='Benefits']"
        this.raisingSomeone = "(//span[@class='slds-radio_faux'])[2]"
        this.newRequest = "[data-value='Yes']"
        this.searchOnCaseNumber = "//button[@aria-label='Search']";//button[contains(@class,'hasSearchTerm')]";
        this.enterACaseNumberInGlobalSearch = "(//input[@type='search'])[4]"//"//input[@placeholder='Search...']"
        this.globalSearch = "(//button[@type='button'])[1]";
        this.caseSearchBox = '[placeholder="Search this list..."]';
        this.refreshButton = 'button[name="refreshButton"]';
        // this.selectCaseListViewDropdown = '[title="Select a List View: Cases"]';
        this.benefitQueue = "(//span[@class='owner-name slds-grow'])[2]";
        this.userClick = this.page.getByRole('button', { name: 'View profile' })
        this.userLogout = "//a[text()='Log Out']"
        this.caseClick = "(//a[@title='Cases'])[2]"
        this.caseNumberLocator = "//a[text()='$caseNumber']";



        this.caseRecordsType = "((//span[text()='Case Record Type']/ancestor::dt/following-sibling::dd)//*[@slot='outputField']//span)[1]"
        this.caseOwner = "(//span[text()='Case Owner']/ancestor::dt/following-sibling::dd)[2]//*[@class='not-navigable']//span";
        this.priority = "(//span[text()='Priority']/ancestor::dt/following-sibling::dd)[2]//*[@slot='outputField']"
        this.category = "(//span[text()='Category']/ancestor::dt/following-sibling::dd)[2]//*[@slot='outputField']"
        this.subCategory = "(//span[text()='Sub Category']/ancestor::dt/following-sibling::dd)[2]//*[@slot='outputField']"


    }
    /* async searchForCase(caseNumber) {
         await this.page.fill(this.caseSearchBox, caseNumber);
         await this.page.locator(this.caseSearchBox).press('Enter');
     }
     async searchForCaseUntilVisible(caseNumber) {
         while (true) {
             await this.page.locator(this.refreshButton).click();
             const dynamicCaseNumber = this.caseNumberLocator.replace('$caseNumber', caseNumber)
             if (await this.page.locator(dynamicCaseNumber).isVisible()) {
                 break;
             }
         }
     }
     async clickOnCase(caseNumber) {
         const dynamicCaseNumber = this.caseNumberLocator.replace('$caseNumber', caseNumber)
         await this.page.locator(dynamicCaseNumber).click();
     }
     async navigationToCase() {
         await this.page.waitForSelector(this.navMenu, { state: 'visible' });
         await this.page.click(this.navMenu);
         await this.page.waitForSelector(this.navCase, { state: 'visible' });
         await this.page.click(this.navCase);
     } */
    async selectListViewedDropdown() {
        await this.page.waitForSelector(this.listViewedDropdown, { state: 'visible' });
        await this.page.click(this.listViewedDropdown);
        // await this.page.waitForTimeout(3000);
        await this.page.waitForSelector(this.listViewedSearch, { state: 'visible' });
        await this.page.fill(this.listViewedSearch, 'All Cases');
        // await this.page.waitForTimeout(2000);
        await this.page.waitForSelector(this.allCasesOption, { state: 'visible' });
        await this.page.click(this.allCasesOption);

    }
    async selectListViewedDropdownER(er) {
        await this.page.waitForSelector(this.listViewedDropdown, { state: 'visible' });
        await this.page.click(this.listViewedDropdown);
        await this.page.waitForTimeout(3000);
        await this.page.waitForSelector(this.listViewedSearch, { state: 'visible' });
        await this.page.fill(this.listViewedSearch, er);
        // await this.page.waitForTimeout(2000);
        await this.page.waitForSelector(this.automationER, { state: 'visible' });
        await this.page.click(this.automationER);
        await this.page.waitForTimeout(3000);
        await this.page.waitForSelector(this.caseSelectionWPS, { state: 'visible' });
        await this.page.click(this.caseSelectionWPS);

    }
    async wpsGetCaseNumber() {
        let caseNumber = await this.page.locator(this.caseSelectionWPS).textContent();
        let number = caseNumber.replace("Case Number", "").trim();
        console.log(number);
        return number;
    }
    async caseVerification() {
        const messageSelector = await this.page.locator(this.elementSelector).textContent();; // Replace with the actual selector for your message

        // Get the text content of the element
        const message = await this.page.textContent(messageSelector);

        // Use a regular expression to remove numbers at the end of the message
        const cleanMessage = message.replace(/\d+$/, '').trim();

        console.log('Cleaned message:', cleanMessage);
    }

    async userLogin(loginuser) {
        await this.page.pause();
        await this.page.waitForSelector(this.setupButton, { state: 'visible' });
        await this.page.click(this.setupButton);
        await this.page.waitForSelector(this.setupButton2, { state: 'visible' });
        const [page1] = await Promise.all([
            this.page.waitForEvent("popup"),
            await this.page.click(this.setupButton2)
        ])
        await page1.waitForLoadState('load');
        await this.page.close();
        await page1.locator(this.searchBox).waitFor({ state: 'visible' });
        await page1.locator(this.searchBox).fill(loginuser);
        await page1.getByRole('option', { name: loginuser + ' User' }).click();
        const frame = await page1.frameLocator('iframe');
        await frame.locator(this.loginBtn).click();
        return page1;
    }
    async hrUserLogin(nzLoginuser) {
        await this.page.pause();
        await this.page.waitForSelector(this.setupButton, { state: 'visible' });
        await this.page.click(this.setupButton);
        await this.page.waitForSelector(this.setupButton2, { state: 'visible' });
        const [page1] = await Promise.all([
            this.page.waitForEvent("popup"),
            await this.page.click(this.setupButton2)
        ])
        await page1.waitForLoadState('load');
        await this.page.close();
        await page1.locator(this.searchBox).waitFor({ state: 'visible' });
        await page1.locator(this.searchBox).fill(nzLoginuser);
        await page1.getByRole('option', { name: nzLoginuser + ' User' }).click();
        const frame = await page1.frameLocator('iframe');
        await frame.locator(this.loginBtn).click();
        return page1;
    }

    async closeTab() {
        await this.page.close();
    }
    async gotoHome() {
        if (!(await this.page.locator(this.selectedMenu).isVisible())) {
            await this.page.locator(this.navMenu).waitFor({ state: 'visible' });
            await this.page.click(this.navMenu);
        }
    }
    async clickOnAppLauch() {
        await this.page.waitForTimeout(5000);
        await this.page.waitForSelector(this.appLaunch, { state: 'visible' });
        await this.page.click(this.appLaunch);
        // await this.page.screenshot({ path: './screenshots/AppLaunch.jpg' });
    }

    async searchForPeopleServices(searchPeopleServices) {
        await this.page.waitForSelector(this.search, { state: 'visible' });
        await this.page.fill(this.search, searchPeopleServices);
        await this.page.waitForTimeout(5000);
    }
    async clickOnPeopleServices() {
        await this.page.waitForSelector(this.peopleServices, { state: 'visible' });
        await this.page.waitForTimeout(5000)
        await this.page.click(this.peopleServices);
        await this.page.waitForTimeout(10000)
    }


    async searchForMeAtWoolies(searchWoolies) {
        console.log("searchWoolies: " + searchWoolies);
        await this.page.waitForSelector(this.search, { state: 'visible' });
        await this.page.fill(this.search, searchWoolies);
    }

    async searchForWoolworthsNZ(searchWoolworthsNZ) {
        // console.log("searchWoolworthsNZ: " + searchWoolies);
        await this.page.waitForSelector(this.search, { state: 'visible' });
        await this.page.fill(this.search, searchWoolworthsNZ);
    }
    async clickOnWoolworthsNZ() {
        await this.page.waitForSelector(this.woolWorthsNZ, { state: 'visible' });
        await this.page.waitForTimeout(5000)
        await this.page.click(this.woolWorthsNZ);
        await this.page.waitForTimeout(10000)
    }

    async clickOnMeAtWoolies() {
        await this.page.waitForSelector(this.MeAtWoolies, { state: 'visible' });
        const [page2] = await Promise.all([
            this.page.waitForEvent("popup"),
            await this.page.click(this.MeAtWoolies)
        ])
        await page2.waitForLoadState('load');
        return page2;
    }

    async clickOnUserLogout() {
        await this.page.reload();
        await this.userClick.waitFor({ state: 'visible' });
        await this.userClick.click();
        await this.page.waitForTimeout(3000);
        await this.page.locator(this.userLogout).waitFor({ state: 'visible' });
        await this.page.locator(this.userLogout).click();
    }



    async pageReload() {
        for (let i = 0; i < 9; i++) {
            await this.page.reload();
            await this.page.waitForTimeout(10000);
        }
        await this.page.waitForTimeout(5000);

    }
    async clcikOnGlobalSearch() {
        await this.page.locator(this.searchOnCaseNumber).waitFor({ state: 'visible' });
        await this.page.locator(this.searchOnCaseNumber).click();
    }
    async enterTheCaseNumber(caseNumber) {
        await this.page.locator(this.enterACaseNumberInGlobalSearch).waitFor({ state: 'visible' });
        await this.page.type(this.enterACaseNumberInGlobalSearch, caseNumber);
        await this.page.waitForTimeout(5000);
        await this.page.press(this.enterACaseNumberInGlobalSearch, 'Enter');
    }

    async clickCaseNumber(caseNumber) {
        await this.page.getByRole('link', { name: 'Cases 1' }).waitFor({ state: "visible" });
        await this.page.getByRole('link', { name: 'Cases 1' }).click();
        // Replace the placeholder with the actual case number
        const caseNumberLink = this.caseNumberLocator.replace('$caseNumber', caseNumber);
        console.log(caseNumberLink);  // Log the final generated locator
        //await this.page.locator(caseNumberLink).waitFor({ state: 'visible' });
        await this.page.locator(caseNumberLink).last().click();  // Click on the dynamically generated link
    }


    async verifyCaseDetails(caseRecordType, caseOwner, priority, category, subCategory) {
        expect(await this.page.locator(this.caseRecordsType).textContent()).toContain(caseRecordType);
        expect(await this.page.locator(this.caseOwner).textContent()).toContain(caseOwner);
        expect(await this.page.locator(this.priority).textContent()).toContain(priority);
        expect(await this.page.locator(this.category).textContent()).toContain(category);
        expect(await this.page.locator(this.subCategory).textContent()).toContain(subCategory);

    }

}


