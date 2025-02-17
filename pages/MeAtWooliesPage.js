export class MeAtWooliesPage {
    constructor(page) {
        this.page = page;
        this.peopleRequest = "//span[text()='Raise a People Services request']"


        this.raisingSomeone = "(//span[@class='slds-radio_faux'])[1]"
        this.newRequest = "//button[@aria-label='Is this a new request?']"
        this.newRequestDropDown = "[data-value='No']"
        this.existingNumber = "//input[@name='caseNum']"

        //Benefit Category
        this.benefitTitle = "//h5[text()='Benefits']"
        this.subCatFieldClick = "//button[@aria-label='Sub Category']"
        this.subcatDropdown = "//span[@title='${subcatName}']";

        //Pay and Basics Category
        this.payAndBasicsTitle = "//h5[text()='Pay and the Basics']"

        //Career and Recruitment Category
        this.careerAndRecuritmentTitle = "//h5[text()='Career and Recruitment']"

        //Workplace Adjustment & Flexible Work Request Category
        this.workplaceAdjustmentTitle = "//h5[text()='Workplace Adjustment & Flexible Workplace Request']"

        //Leaving the Company Category  
        this.leavingTheCompanyTitle = "//h5[text()='Leaving the Company']"

        //Kronos Category
        this.kronsTitle = "//h5[text()='Kronos']"

        //Team Data App Category
        this.teamDataAppTitle = "//h5[text()='Team Data App']"

        //SuccessFactors Technical Issues Category
        this.successFactorsTechnicalIssuesTitle = "//h5[text()='SuccessFactors Technical Issues']"

        //Development and Learning Category
        this.developmentAndLearningTitle = "//h5[text()='Development and Learning']"

        //WorkJam Category
        this.workJamTitle = "//h5[text()='WorkJam']"

        //Proactive Services T&A Category
        this.proactiveServicesTitle = "//h5[text()='Proactive Services T&A']"

        //W360 T&A Category
        this.w360Title = "//h5[text()='W360 T&A']"

        //Team View Category
        this.teamViewTitle = "//h5[text()='Team View']"

        //Mobility Category
        this.mobilityTitle = "//h5[text()='Mobility']"

        //People Dashboard Queries Category
        this.peopleDashboardQueriesTitle = "//h5[text()='People Data Self-Service']"

        //Remuneration Category
        this.remunerationTitle = "//h5[text()='Remuneration']"

        //Casual Conversion Category
        this.casualConversionTitle = "//h5[text()='Casual Conversion']"

        //Report Requests Category
        this.reportRequestsTitle = "//h5[text()='Report Requests']"
        this.targetedDeliveryDate = "//input[@name='Targeted_Delivery_Date__c']"
        this.requestFrequency = "//button[@name='Request Frequency']"
        this.requestFrequencyAdHoc = "[data-value='Ad Hoc Request (Created and shared to run as required on ongoing basis)']"
        this.requestFrequencyOneOff = "[data-value='One-off request']"
        this.requestFrequencyRegularScheduleReports = "[data-value='Regular/Scheduled Report']"
        this.specifyReportingPeriod = "//input[@name='Specify Reporting Period']"
        this.reportdatarequest = "//textarea[@name='Provide a description and purpose of the report / data request']"
        this.fieldsAreRequired = "//textarea[@name='Please specify the format of the output file']"
        this.employeePopulationIsTheData = "//textarea[@name='What employee population is the data / report required for?']"
        this.specificationsRequired = "//textarea[@name='Are there any other filters or specifications required for this report?']"
        this.outputFile = "//button[@name='Please specify the format of the output file']"
        this.outputFile_CSV = "[data-value='CSV']"
        this.outputFile_Excel = "[data-value='Google Sheet']"
        this.outputFile_Xlsx = "[data-value='Xlsx']"
        this.audience = "//button[@name='Audience']"
        this.audience_ER = "[data-value='Employee Relations']"
        this.audience_HR = "[data-value='Legal']"
        this.audience_Legal = "[data-value='Legal']"
        this.audience_NonHR = "[data-value='Non HR']"
        this.theirFirstName = "//input[@placeholder='Enter Name or Employee ID']"
        this.selecttheirName = "[data-subfield='Saravanan Sekar']"
        this.nextButton = "//button[text()='Next']"
        this.subject = "//input[@name='subject']"
        this.phoneNumber = "//input[@name='phnnumber']"
        this.email = "//input[@name='email']"
        this.contactMethod = "//button[@aria-label='Preferred contact method']"
        this.contactMethodDropDown = "[data-value='Email']"
        this.submitButton = "//button[text()='Submit']"
        this.previousButton = "//button[text()='Previous']"
        this.caseNumber = "//div[@class='cardNumCont']/h2"

        this.returnToPeopleServices = "[title='Return to People Services']"




    }
    async selectSubcatDropdown(subcatName) {
        await this.page.locator(this.subCatFieldClick).waitFor({ state: 'visible' });
        await this.page.locator(this.subCatFieldClick).click();
        const dynamicDropdownvalue = await this.page.locator(this.subcatDropdown.replace('${subcatName}', subcatName));
        await dynamicDropdownvalue.waitFor({ state: 'visible' });
        await dynamicDropdownvalue.click();
        //await this.page.screenshot({ path: `./screenshots/${subcatName}.png` });
    }
    async clickOnpeopleRequest() {
        await this.page.locator(this.peopleRequest).waitFor({ state: 'visible' });
        await this.page.locator(this.peopleRequest).click();
    }

    async clickOnpayAndBasicsTitle() {
        await this.page.locator(this.payAndBasicsTitle).waitFor({ state: 'visible' });
        await this.page.locator(this.payAndBasicsTitle).click();
    }
    async clickOnbenefitTitle() {
        await this.page.locator(this.benefitTitle).waitFor({ state: 'visible' });
        await this.page.locator(this.benefitTitle).click();
    }
    async clickOnCareerAndRecruitmentTitle() {
        await this.page.locator(this.careerAndRecuritmentTitle).waitFor({ state: 'visible' });
        await this.page.locator(this.careerAndRecuritmentTitle).click();
    }
    async clickOnWorkplaceAdjustmentTitle() {
        await this.page.locator(this.workplaceAdjustmentTitle).waitFor({ state: 'visible' });
        await this.page.locator(this.workplaceAdjustmentTitle).click();
    }
    async clickOnLeavingTheCompanyTitle() {
        await this.page.locator(this.leavingTheCompanyTitle).waitFor({ state: 'visible' });
        await this.page.locator(this.leavingTheCompanyTitle).click();
    }
    async clickOnKronsTitle() {
        await this.page.locator(this.kronsTitle).waitFor({ state: 'visible' });
        await this.page.locator(this.kronsTitle).click();
    }
    async clickOnTeamDataAppTitle() {
        await this.page.locator(this.teamDataAppTitle).waitFor({ state: 'visible' });
        await this.page.locator(this.teamDataAppTitle).click();
    }
    async clickOnSuccessFactorsTechnicalIssuesTitle() {
        await this.page.locator(this.successFactorsTechnicalIssuesTitle).waitFor({ state: 'visible' });
        await this.page.locator(this.successFactorsTechnicalIssuesTitle).click();
    }
    async clickOnDevelopmentAndLearningTitle() {
        await this.page.locator(this.developmentAndLearningTitle).waitFor({ state: 'visible' });
        await this.page.locator(this.developmentAndLearningTitle).click();
    }
    async clickOnWorkJamTitle() {
        await this.page.locator(this.workJamTitle).waitFor({ state: 'visible' });
        await this.page.locator(this.workJamTitle).click();
    }
    async clickOnProactiveServicesTitle() {
        await this.page.locator(this.proactiveServicesTitle).waitFor({ state: 'visible' });
        await this.page.locator(this.proactiveServicesTitle).click();
    }
    async clickOnW360Title() {
        await this.page.locator(this.w360Title).waitFor({ state: 'visible' });
        await this.page.locator(this.w360Title).click();
    }
    async clickOnTeamViewTitle() {
        await this.page.locator(this.teamViewTitle).waitFor({ state: 'visible' });
        await this.page.locator(this.teamViewTitle).click();
    }
    async clickOnMobilityTitle() {
        await this.page.locator(this.mobilityTitle).waitFor({ state: 'visible' });
        await this.page.locator(this.mobilityTitle).click();
    }
    async clickOnPeopleDashboardQueriesTitle() {
        await this.page.locator(this.peopleDashboardQueriesTitle).waitFor({ state: 'visible' });
        await this.page.locator(this.peopleDashboardQueriesTitle).click();
    }
    async clickOnRemunerationTitle() {
        await this.page.locator(this.remunerationTitle).waitFor({ state: 'visible' });
        await this.page.locator(this.remunerationTitle).click();
    }
    async clickOnCasualConversionTitle() {
        await this.page.locator(this.casualConversionTitle).waitFor({ state: 'visible' });
        await this.page.locator(this.casualConversionTitle).click();
    }
    async clickOnReportRequestsTitle() {
        await this.page.locator(this.reportRequestsTitle).waitFor({ state: 'visible' });
        await this.page.locator(this.reportRequestsTitle).click();
    }

    async clickonRaisingSomeone() {
        await this.page.locator(this.raisingSomeone).waitFor({ state: 'visible' });
        await this.page.locator(this.raisingSomeone).click();

    }

    async clickOnNewRequest() {
        await this.page.locator(this.newRequest).waitFor({ state: 'visible' });
        await this.page.locator(this.newRequest).click();
        await this.page.locator(this.newRequestDropDown).waitFor({ state: 'visible' });
        await this.page.locator(this.newRequestDropDown).click();
    }

    async fillTheExistingNumber(existingCaseNumber) {
        await this.page.locator(this.existingNumber).waitFor({ state: 'visible' });
        await this.page.locator(this.existingNumber).fill(existingCaseNumber);
        // await this.page.waitForTimeout(5000);
    }


    async fillTheName(firstName) {
        await this.page.locator(this.theirFirstName).waitFor({ state: 'visible' });
        await this.page.locator(this.theirFirstName).fill(firstName);
        await this.page.locator(this.selecttheirName).waitFor({ state: 'visible' });
        await this.page.locator(this.selecttheirName).click();
        // await this.page.waitForTimeout(5000);
    }

    async clickOnNext() {
        await this.page.locator(this.nextButton).waitFor({ state: 'visible' });
        await this.page.locator(this.nextButton).click();
    }
    async fillTheSubject(subject) {
        await this.page.locator(this.subject).waitFor({ state: 'visible' });
        await this.page.fill(this.subject, subject);
        // await this.page.waitForTimeout(5000);
    }

    async clickOnNext() {
        await this.page.locator(this.nextButton).waitFor({ state: 'visible' });
        await this.page.locator(this.nextButton).click();
    }

    async fillThePhoneNumber(phoneNumber) {
        await this.page.locator(this.phoneNumber).waitFor({ state: 'visible' });
        await this.page.type(this.phoneNumber, phoneNumber);
        // await this.page.waitForTimeout(2000);
    }
    async fillTheEmail(email) {
        await this.page.locator(this.email).waitFor({ state: 'visible' });
        await this.page.locator(this.email).click();
        await this.page.type(this.email, email);
        // await this.page.waitForTimeout(2000);
    }

    async clickOnPrevious() {
        await this.page.locator(this.previousButton).waitFor({ state: 'visible' });
        await this.page.locator(this.previousButton).click();
    }
    async clickOnSubmit() {
        await this.page.locator(this.submitButton).waitFor({ state: 'visible' });
        await this.page.locator(this.submitButton).click();
    }

    /*async getCaseNumber() {
        await this.page.locator(this.caseNumber).waitFor({ state: 'visible' });
        const caseNumber = await this.page.locator(this.caseNumber).textContent();
        // const caseNumber_trimmed = caseNumber.trim();
        // console.log(caseNumber_trimmed);
        return caseNumber_trimmed;
    } */

    async getCaseNumber() {
        await this.page.locator(this.caseNumber).waitFor({ state: 'visible' });
        // Locate the element and extract its text content
        const caseNumber = await this.page.locator(this.caseNumber).textContent();
        const caseNumberTrimmed = caseNumber.trim();  // Trim any extra spaces
        console.log(caseNumberTrimmed);  // Log the case number
        return caseNumberTrimmed;  // Return the trimmed case number
    }


    async clickOnReturnToPeopleServices() {
        await this.page.locator(this.returnToPeopleServices).waitFor({ state: 'visible' });
        await this.page.locator(this.returnToPeopleServices).click();
    }

}







