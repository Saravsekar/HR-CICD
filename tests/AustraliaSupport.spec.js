import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { MeAtWooliesPage } from '../pages/MeAtWooliesPage';


const testdata = JSON.parse(JSON.stringify(require('../dataset/LoginPage.json')))
const VD = JSON.parse(JSON.stringify(require('../dataset/VerificationDetails.json')))
const CS = JSON.parse(JSON.stringify(require('../dataset/CategoryAndSubcategory.json')))
test.describe.configure({ mode: 'parallel' });
test.setTimeout(60000);

//Benefits
test('Verify whether the case created in Me@Woolies with Benefits as Cateogry and Benefits/Offers as subcategory is getting assigned to Advisory Payroll queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnbenefitTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.benefits_Cat_BenefitsOffers_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryPayroll, VD.priority_Low, VD.benefits_Cat, VD.benefits_Cat_BenefitsOffers_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Benefits as Cateogry and Continuity/ Aggregate Service as subcategory is getting assigned to Benefits queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnbenefitTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.benefits_Cat_ContinuityAggregateService_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_Benefits, VD.priority_Low, VD.benefits_Cat, VD.benefits_Cat_ContinuityAggregateService_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Benefits as Cateogry and Novated Lease as subcategory is getting assigned to Benefits queuen', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnbenefitTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.benefits_Cat_NovatedLease_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_Benefits, VD.priority_Low, VD.benefits_Cat, VD.benefits_Cat_NovatedLease_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Benefits as Cateogry and Parental Leave - Gift Card as subcategory is getting assigned to Advisory Payroll queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnbenefitTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.benefits_Cat_ParentalLeaveGiftCard_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryPayroll, VD.priority_Low, VD.benefits_Cat, VD.benefits_Cat_ParentalLeaveGiftCard_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Benefits as Cateogry and Parental Leave - Superannuation as subcategory is getting assigned to Benefits queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnbenefitTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.benefits_Cat_ParentalLeaveSuperannuation_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_Benefits, VD.priority_Medium, VD.benefits_Cat, VD.benefits_Cat_ParentalLeaveSuperannuation_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Benefits as Cateogry and PlusCard as subcategory is getting assigned to Advisory Payroll queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnbenefitTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.benefits_Cat_PlusCard_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryPayroll, VD.priority_Low, VD.benefits_Cat, VD.benefits_Cat_PlusCard_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Benefits as Cateogry and PlusCard - Loss Prevention as subcategory is getting assigned to Benefits queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnbenefitTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.benefits_Cat_PlusCardLossPrevention_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_Benefits, VD.priority_Medium, VD.benefits_Cat, VD.benefits_Cat_PlusCardLossPrevention_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Benefits as Cateogry and PlusCard - Not Working as subcategory is getting assigned to Benefits queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnbenefitTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.benefits_Cat_PlusCardNotWorking_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_Benefits, VD.priority_Medium, VD.benefits_Cat, VD.benefits_Cat_PlusCardNotWorking_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Benefits as Cateogry and Superannuation Policy as subcategory is getting assigned to Advisory Payroll queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Benefit form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnbenefitTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.benefits_Cat_SuperannuationPolicy_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryPayroll, VD.priority_Low, VD.benefits_Cat, VD.benefits_Cat_SuperannuationPolicy_SubCat);
        await homePage.close();
    });
});

//Career and Recuirmnet
test('Verify whether the case created in Me@Woolies with Career and Recruitment Cateogry and External Candidate as subcategory is getting assigned to Advisory Payroll queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Career and Recruitment form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnCareerAndRecruitmentTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.careerandRecruitment_cat_ExternalCandidate_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryPayroll, VD.priority_Low, VD.careerAndRecuitment_Cat, VD.careerAndRecuitment_Cat_ExternalCandidate_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Career and Recruitment Cateogry and Hiring Manager Requisition Query as subcategory is getting assigned to Advisory Payroll queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Career and Recruitment form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnCareerAndRecruitmentTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.careerandRecruitment_cat_HiringManagerRequisitionQuery_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryPayroll, VD.priority_Low, VD.careerAndRecuitment_Cat, VD.careerAndRecuitment_Cat_HiringManagerRequisitionQuery_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Career and Recruitment Cateogry and Onboarding as subcategory is getting assigned to Advisory Payroll queuen', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Career and Recruitment form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnCareerAndRecruitmentTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.careerandRecruitment_cat_Onboarding_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryPayroll, VD.priority_Low, VD.careerAndRecuitment_Cat, VD.careerAndRecuitment_Cat_Onboarding_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Career and Recruitment Cateogry and System Navigation as subcategory is getting assigned to Advisory Payroll queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Career and Recruitment form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnCareerAndRecruitmentTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.careerandRecruitment_cat_SystemNavigation_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryPayroll, VD.priority_Low, VD.careerAndRecuitment_Cat, VD.careerAndRecuitment_Cat_SystemNavigation_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Career and Recruitment Cateogry and Transfer as subcategory is getting assigned to Advisory Payroll queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Career and Recruitment form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnCareerAndRecruitmentTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.careerandRecruitment_cat_Transfer_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryPayroll, VD.priority_Low, VD.careerAndRecuitment_Cat, VD.careerAndRecuitment_Cat_Transfer_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Career and Recruitment Cateogry and Virtual Induction as subcategory is getting assigned to Advisory Payroll queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Career and Recruitment form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnCareerAndRecruitmentTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.careerandRecruitment_cat_VirtualInduction_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryPayroll, VD.priority_Low, VD.careerAndRecuitment_Cat, VD.careerAndRecuitment_Cat_VirtualInduction_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Career and Recruitment Cateogry and Work Experience as subcategory is getting assigned to Advisory Payroll queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Career and Recruitment form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnCareerAndRecruitmentTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.careerandRecruitment_cat_WorkExperience_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryPayroll, VD.priority_Low, VD.careerAndRecuitment_Cat, VD.careerAndRecuitment_Cat_WorkExperience_SubCat);
        await homePage.close();
    });
});



//Development and Learning
test('Verify whether the case created in Me@Woolies with Development and Learning as Cateogry and Apprentices / Traineeships as subcategory is getting assigned to Advisory Payroll queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Development and Learning form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnDevelopmentAndLearningTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);

        await woolies.selectSubcatDropdown(CS.developmentandLearning_cat_ApprenticesTraineeships_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryPayroll, VD.priority_Low, VD.developmentandLearning_Cat, VD.developmentandLearning_Cat_ApprenticesTraineeships_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Development and Learning as Cateogry and Compliance Booking Nomination as subcategory is getting assigned to Advisory Admin queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Development and Learning form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnDevelopmentAndLearningTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.developmentandLearning_cat_ComplianceBookingNomination_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryAdmin, VD.priority_Medium, VD.developmentandLearning_Cat, VD.developmentandLearning_Cat_ComplianceBookingNomination_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Development and Learning as Cateogry and Graduate / Internships as subcategory is getting assigned to Advisory Payroll queuen', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Development and Learning form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnDevelopmentAndLearningTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.developmentandLearning_cat_GraduateInternships_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryPayroll, VD.priority_Low, VD.developmentandLearning_Cat, VD.developmentandLearning_Cat_GraduateInternships_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Development and Learning as Cateogry and Invoices as subcategory is getting assigned to Advisory Admin queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Development and Learning form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnDevelopmentAndLearningTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.developmentandLearning_cat_Invoices_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryAdmin, VD.priority_Medium, VD.developmentandLearning_Cat, VD.developmentandLearning_Cat_Invoices_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Development and Learning as Cateogry and Learning Bulk Assignment as subcategory is getting assigned to Advisory Payroll queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Development and Learning form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnDevelopmentAndLearningTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.developmentandLearning_cat_LearningBulkAssignment_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryPayroll, VD.priority_Low, VD.developmentandLearning_Cat, VD.developmentandLearning_Cat_LearningBulkAssignment_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Development and Learning as Cateogry and Learning Completion Uploads as subcategory is getting assigned to Advisory Payroll queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Development and Learning form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnDevelopmentAndLearningTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.developmentandLearning_cat_LearningCompletionUploads_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_ERAdvisory, VD.priority_Low, VD.developmentandLearning_Cat, VD.developmentandLearning_Cat_LearningCompletionUploads_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Development and Learning as Cateogry and Other Program Booking Nomination as subcategory is getting assigned to Advisory Payroll queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Development and Learning form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnDevelopmentAndLearningTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.developmentandLearning_cat_OtherProgramBookingNomination_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryPayroll, VD.priority_Low, VD.developmentandLearning_Cat, VD.developmentandLearning_Cat_OtherProgramBookingNomination_SubCat);
        await homePage.close();
    });
});


//WorkJam
test('Verify whether the case created in Me@Woolies with WorkJam as Cateogry and Accessing WorkJam as subcategory is getting assigned to Advisory Payroll queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('WorkJam form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnWorkJamTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.workJam_Cat_AccessingWorkJam_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryPayroll, VD.priority_Low, VD.WorkJam_Cat, VD.WorkJam_Cat_AccessingWorkJam_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with WorkJam as Cateogry and WJ Availability as subcategory is getting assigned to Advisory Payroll queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('WorkJam form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnWorkJamTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.workJam_Cat_WJAvailability_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryPayroll, VD.priority_Low, VD.WorkJam_Cat, VD.WorkJam_Cat_WJAvailability_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with WorkJam as Cateogry and WJ Channels & Messaging as subcategory is getting assigned to Advisory Payroll queuen', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('WorkJam form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnWorkJamTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.workJam_Cat_WJChannelsMessaging_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryPayroll, VD.priority_Low, VD.WorkJam_Cat, VD.WorkJam_Cat_WJChannelsMessaging_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with WorkJam as Cateogry and WJ Clock In/Out as subcategory is getting assigned to Advisory Payroll queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('WorkJam form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnWorkJamTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.workJam_Cat_WJClockInOut_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryPayroll, VD.priority_Low, VD.WorkJam_Cat, VD.WorkJam_Cat_WJClockInOut_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with WorkJam as Cateogry and WJ Home page as subcategory is getting assigned to Advisory Payroll queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('WorkJam form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnWorkJamTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.workJam_Cat_WJHomepage_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryPayroll, VD.priority_Low, VD.WorkJam_Cat, VD.WorkJam_Cat_WJHomepage_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with WorkJam as Cateogry and WJ Knowledge Center as subcategory is getting assigned to Advisory Payroll queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('WorkJam form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnWorkJamTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.workJam_Cat_WJKnowledgeCenter_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryPayroll, VD.priority_Low, VD.WorkJam_Cat, VD.WorkJam_Cat_WJKnowledgeCenter_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with WorkJam as Cateogry and WJ Notifications as subcategory is getting assigned to Advisory Payroll queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('WorkJam form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnWorkJamTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.workJam_Cat_WJNotifications_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryPayroll, VD.priority_Low, VD.WorkJam_Cat, VD.WorkJam_Cat_WJNotifications_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with WorkJam as Cateogry and WJ Schedule as subcategory is getting assigned to Advisory Payroll queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('WorkJam form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnWorkJamTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.workJam_Cat_WJSchedule_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryPayroll, VD.priority_Low, VD.WorkJam_Cat, VD.WorkJam_Cat_WJSchedule_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with WorkJam as Cateogry and WJ Shift Offer and Adjustment as subcategory is getting assigned to Advisory Payroll queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('WorkJam form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnWorkJamTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.workJam_Cat_WJShiftOfferandAdjustment_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryPayroll, VD.priority_Low, VD.WorkJam_Cat, VD.WorkJam_Cat_WJShiftOfferandAdjustment_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with WorkJam as Cateogry and WJ Survey as subcategory is getting assigned to Advisory Payroll queuen', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('WorkJam form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnWorkJamTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.workJam_Cat_WJSurvey_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryPayroll, VD.priority_Low, VD.WorkJam_Cat, VD.WorkJam_Cat_WJSurvey_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with WorkJam as Cateogry and WJ Training as subcategory is getting assigned to Advisory Payroll queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('WorkJam form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnWorkJamTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.workJam_Cat_WJTraining_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryPayroll, VD.priority_Low, VD.WorkJam_Cat, VD.WorkJam_Cat_WJTraining_SubCat);
        await homePage.close();
    });
});

//Proactive Services T&A
test('Verify whether the case created in Me@Woolies with Proactive Services T&A as Cateogry and Access Issues as subcategory is getting assigned to Proactive Services queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Proactive Services T&A form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnProactiveServicesTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.proactiveServicesTA_cat_AccessIssues_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_ProactiveServices, VD.priority_Low, VD.ProactiveServicesTA_Cat, VD.ProactiveServicesTA_Cat_AccessIssues_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Proactive Services T&A as Cateogry and Allowances as subcategory is getting assigned to Proactive Services queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Proactive Services T&A form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnProactiveServicesTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.proactiveServicesTA_cat_Allowances_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_ProactiveServices, VD.priority_Low, VD.ProactiveServicesTA_Cat, VD.ProactiveServicesTA_Cat_Allowances_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Proactive Services T&A as Cateogry and Bank TOIL as subcategory is getting assigned to Proactive Services queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Proactive Services T&A form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnProactiveServicesTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.proactiveServicesTA_cat_BankTOIL_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_ProactiveServices, VD.priority_Low, VD.ProactiveServicesTA_Cat, VD.ProactiveServicesTA_Cat_BankTOIL_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Proactive Services T&A as Cateogry and Change Cost Centre as subcategory is getting assigned to Proactive Services queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Proactive Services T&A form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnProactiveServicesTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.proactiveServicesTA_cat_ChangeCostCentre_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_ProactiveServices, VD.priority_Low, VD.ProactiveServicesTA_Cat, VD.ProactiveServicesTA_Cat_ChangeCostCentre_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Proactive Services T&A as Cateogry and Change Meal Break as subcategory is getting assigned to Proactive Services queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Proactive Services T&A form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnProactiveServicesTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.proactiveServicesTA_cat_ChangeMealBreak_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_ProactiveServices, VD.priority_Low, VD.ProactiveServicesTA_Cat, VD.ProactiveServicesTA_Cat_ChangeMealBreak_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Proactive Services T&A as Cateogry and Change Pay Level as subcategory is getting assigned to Proactive Services queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Proactive Services T&A form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnProactiveServicesTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.proactiveServicesTA_cat_ChangePayLevel_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_ProactiveServices, VD.priority_Low, VD.ProactiveServicesTA_Cat, VD.ProactiveServicesTA_Cat_ChangePayLevel_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Proactive Services T&A as Cateogry and Delete Shift as subcategory is getting assigned to Proactive Services queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Proactive Services T&A form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnProactiveServicesTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.proactiveServicesTA_cat_DeleteShift_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_ProactiveServices, VD.priority_Low, VD.ProactiveServicesTA_Cat, VD.ProactiveServicesTA_Cat_DeleteShift_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Proactive Services T&A as Cateogry and Early Mark as subcategory is getting assigned to Proactive Services queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Proactive Services T&A form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnProactiveServicesTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.proactiveServicesTA_cat_EarlyMark_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_ProactiveServices, VD.priority_Low, VD.ProactiveServicesTA_Cat, VD.ProactiveServicesTA_Cat_EarlyMark_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Proactive Services T&A as Cateogry and Kronos Historical Corrections as subcategory is getting assigned to Proactive Services queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Proactive Services T&A form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnProactiveServicesTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.proactiveServicesTA_cat_KronosHistoricalCorrections_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_ProactiveServices, VD.priority_Low, VD.ProactiveServicesTA_Cat, VD.ProactiveServicesTA_Cat_KronosHistoricalCorrections_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Proactive Services T&A as Cateogry and Leave as subcategory is getting assigned to Proactive Services queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Proactive Services T&A form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnProactiveServicesTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.proactiveServicesTA_cat_Leave_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_ProactiveServices, VD.priority_Low, VD.ProactiveServicesTA_Cat, VD.ProactiveServicesTA_Cat_Leave_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Proactive Services T&A as Cateogry and Pay Correction as subcategory is getting assigned to Proactive Services queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Proactive Services T&A form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnProactiveServicesTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.proactiveServicesTA_cat_PayCorrection_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_ProactiveServices, VD.priority_Low, VD.ProactiveServicesTA_Cat, VD.ProactiveServicesTA_Cat_PayCorrection_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Proactive Services T&A as Cateogry and Rostering as subcategory is getting assigned to Proactive Services queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Proactive Services T&A form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnProactiveServicesTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.proactiveServicesTA_cat_Rostering_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_ProactiveServices, VD.priority_Low, VD.ProactiveServicesTA_Cat, VD.ProactiveServicesTA_Cat_Rostering_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Proactive Services T&A as Cateogry and Technical Issues as subcategory is getting assigned to Proactive Services queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Proactive Services T&A form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnProactiveServicesTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.proactiveServicesTA_cat_TechnicalIssues_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_ProactiveServices, VD.priority_Low, VD.ProactiveServicesTA_Cat, VD.ProactiveServicesTA_Cat_TechnicalIssues_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Proactive Services T&A as Cateogry and Time and Attendance as subcategory is getting assigned to Proactive Services queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Proactive Services T&A form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnProactiveServicesTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.proactiveServicesTA_cat_TimeandAttendance_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_ProactiveServices, VD.priority_Low, VD.ProactiveServicesTA_Cat, VD.ProactiveServicesTA_Cat_TimeandAttendance_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Proactive Services T&A as Cateogry and Wage Costing Report as subcategory is getting assigned to Proactive Services queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Proactive Services T&A form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnProactiveServicesTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.proactiveServicesTA_cat_WageCostingReport_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_ProactiveServices, VD.priority_Low, VD.ProactiveServicesTA_Cat, VD.ProactiveServicesTA_Cat_WageCostingReport_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Proactive Services T&A as Cateogry and Other as subcategory is getting assigned to Proactive Services queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Proactive Services T&A form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnProactiveServicesTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.proactiveServicesTA_cat_Other_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_ProactiveServices, VD.priority_Low, VD.ProactiveServicesTA_Cat, VD.ProactiveServicesTA_Cat_Other_SubCat);
        await homePage.close();
    });
});


//W360 T&A
test('Verify whether the case created in Me@Woolies with W360 T&A as Cateogry and Allowances as subcategory is getting assigned to W360 T&A queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('W360 T&A form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnW360Title();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.w360TA_cat_Allowances_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_W360TA, VD.priority_Low, VD.w360TA_Cat, VD.w360TA_Cat_Allowances_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with W360 T&A as Cateogry and Leave as subcategory is getting assigned to W360 T&A queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('W360 T&A form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnW360Title();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.w360TA_cat_Leave_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_W360TA, VD.priority_Low, VD.w360TA_Cat, VD.w360TA_Cat_Leave_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with W360 T&A as Cateogry and Pay Correction as subcategory is getting assigned to W360 T&A queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('W360 T&A form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnW360Title();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.w360TA_cat_PayCorrection_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_W360TA, VD.priority_Low, VD.w360TA_Cat, VD.w360TA_Cat_PayCorrection_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with W360 T&A as Cateogry and Rostering as subcategory is getting assigned to W360 T&A queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('W360 T&A form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnW360Title();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.w360TA_cat_Rostering_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_W360TA, VD.priority_Low, VD.w360TA_Cat, VD.w360TA_Cat_Rostering_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with W360 T&A as Cateogry and Time and Attendance as subcategory is getting assigned to W360 T&A queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('W360 T&A form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnW360Title();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.w360TA_cat_TimeandAttendance_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_W360TA, VD.priority_Low, VD.w360TA_Cat, VD.w360TA_Cat_TimeandAttendance_SubCat);
        await homePage.close();
    });
});


//Team View
test('Verify whether the case created in Me@Woolies with Team View as Cateogry and Personal Details as subcategory is getting assigned to Advisory Payroll queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Team View form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnTeamViewTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.teamView_cat_PersonalDetails_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryPayroll, VD.priority_Low, VD.teamView_Cat, VD.teamView_Cat_PersonalDetails_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Team View as Cateogry and System Navigation as subcategory is getting assigned to Advisory Payroll queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Team View form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnTeamViewTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.teamView_cat_SystemNavigation_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryPayroll, VD.priority_Low, VD.teamView_Cat, VD.teamView_Cat_SystemNavigation_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Team View as Cateogry and Technical Issue/Request as subcategory is getting assigned to Advisory Payroll queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Team View form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnTeamViewTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.teamView_cat_TechnicalIssueRequest_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryPayroll, VD.priority_Low, VD.teamView_Cat, VD.teamView_Cat_TechnicalIssueRequest_SubCat);
        await homePage.close();
    });
});



//Mobility
test('Verify whether the case created in Me@Woolies with Mobility as Cateogry and Relocation Queries as subcategory is getting assigned to Advisory Payroll queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Mobility form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnMobilityTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.mobility_cat_RelocationQueries_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryPayroll, VD.priority_Low, VD.mobility_Cat, VD.mobility_Cat_RelocationQueries_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Mobility as Cateogry and Visas, VEVO, Immigration queries as subcategory is getting assigned to Relocations queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Mobility form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnMobilityTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.mobility_cat_VisasVEVOImmigrationqueries_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_Relocations, VD.priority_Medium, VD.mobility_Cat, VD.mobility_Cat_VisasVEVOImmigrationqueries_SubCat);
        await homePage.close();
    });
});



//People Dashboard Queries
test('Verify whether the case created in Me@Woolies with People Dashboard Queries as Cateogry and People Dashboards - Data Query as subcategory is getting assigned to HR Reporting queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('People Dashboard Queries form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnPeopleDashboardQueriesTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.peopleDashboardQueries_cat_PeopleDashboardsDataQuery_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_HRReporting, VD.priority_Low, VD.peopleDashboardQueries_Cat, VD.peopleDashboardQueries_Cat_PeopleDashboardsDataQuery_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with People Dashboard Queries as Cateogry and People Dashboards - Functional Query as subcategory is getting assigned to HR Reporting queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('People Dashboard Queries form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnPeopleDashboardQueriesTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.peopleDashboardQueries_cat_PeopleDashboardsFunctionalQuery_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_HRReporting, VD.priority_Low, VD.peopleDashboardQueries_Cat, VD.peopleDashboardQueries_Cat_PeopleDashboardsFunctionalQuery_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with People Dashboard Queries as Cateogry and People Dashboards - New User Request as subcategory is getting assigned to People Systems - AU Successfactors queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('People Dashboard Queries form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnPeopleDashboardQueriesTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.peopleDashboardQueries_cat_PeopleDashboardsNewUserRequest_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_PeopleSystemsAUSuccessfactors, VD.priority_Medium, VD.peopleDashboardQueries_Cat, VD.peopleDashboardQueries_Cat_PeopleDashboardsNewUserRequest_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with People Dashboard Queries as Cateogry and People Dashboards - Technical Issue as subcategory is getting assigned to People Systems - AU Successfactors queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('People Dashboard Queries form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnPeopleDashboardQueriesTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.peopleDashboardQueries_cat_PeopleDashboardsTechnicalIssue_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_PeopleSystemsAUSuccessfactors, VD.priority_Low, VD.peopleDashboardQueries_Cat, VD.peopleDashboardQueries_Cat_PeopleDashboardsTechnicalIssue_SubCat);
        await homePage.close();
    });
});



//Remuneration
test('Verify whether the case created in Me@Woolies with Remuneration as Cateogry and Annual Salary Review Issue as subcategory is getting assigned to Advisory Payroll queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Remuneration form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnRemunerationTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.remuneration_Cat_AnnualSalaryReview_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryPayroll, VD.priority_Medium, VD.remuneration_Cat, VD.remuneration_Cat_AnnualSalaryReview_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Remuneration as Cateogry and Job Slotting, Evaluations & Benchmarks Issue as subcategory is getting assigned to Remuneration queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Remuneration form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnRemunerationTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.remuneration_Cat_JobSlottingEvaluationsBenchmarks_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_Remuneration, VD.priority_Low, VD.remuneration_Cat, VD.remuneration_Cat_JobSlottingEvaluationsBenchmarks_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Remuneration as Cateogry and Letters of Offer Request as subcategory is getting assigned to Remuneration queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Remuneration form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnRemunerationTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.remuneration_Cat_LettersofOfferRequest_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_Remuneration, VD.priority_Low, VD.remuneration_Cat, VD.remuneration_Cat_LettersofOfferRequest_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Remuneration as Cateogry and MyIncentive as subcategory is getting assigned to Advisory Payroll queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Remuneration form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnRemunerationTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.remuneration_Cat_MyIncentive_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryPayroll, VD.priority_Medium, VD.remuneration_Cat, VD.remuneration_Cat_MyIncentive_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Remuneration as Cateogry and MyPlan as subcategory is getting assigned to Advisory Payroll queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Remuneration form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnRemunerationTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.remuneration_Cat_MyPlan_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryPayroll, VD.priority_Medium, VD.remuneration_Cat, VD.remuneration_Cat_MyPlan_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Remuneration as Cateogry and Other as subcategory is getting assigned to Advisory Payroll  queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Remuneration form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnRemunerationTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.remuneration_Cat_Other_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryPayroll, VD.priority_Low, VD.remuneration_Cat, VD.remuneration_Cat_Other_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Remuneration as Cateogry and Performance Rating Change as subcategory is getting assigned to Advisory Payroll queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Remuneration form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnRemunerationTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.remuneration_Cat_PerformanceRatingChange_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryPayroll, VD.priority_Medium, VD.remuneration_Cat, VD.remuneration_Cat_PerformanceRatingChange_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Remuneration as Cateogry and Redundancy Advice & Quotes as subcategory is getting assigned to Remuneration queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Remuneration form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnRemunerationTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.remuneration_Cat_RedundancyAdviceQuotes_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_Remuneration, VD.priority_Medium, VD.remuneration_Cat, VD.remuneration_Cat_RedundancyAdviceQuotes_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Remuneration as Cateogry and Reward Outcome Letter as subcategory is getting assigned to Remuneration queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Remuneration form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnRemunerationTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.remuneration_Cat_RewardOutcomeLetter_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_Remuneration, VD.priority_Low, VD.remuneration_Cat, VD.remuneration_Cat_RewardOutcomeLetter_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Remuneration as Cateogry and Share Rights as subcategory is getting assigned to Remuneration queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Remuneration form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnRemunerationTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.remuneration_Cat_ShareRights_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_Remuneration, VD.priority_Low, VD.remuneration_Cat, VD.remuneration_Cat_ShareRights_SubCat);
        await homePage.close();
    });
});


//Casual Conversion
test('Verify whether the case created in Me@Woolies with Casual Conversion as Cateogry and Process Queries as subcategory is getting assigned to Advisory Admin queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Casual Conversion form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnCasualConversionTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.casualConversion_cat_ProcessQueries_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryAdmin, VD.priority_Low, VD.casualConversion_Cat, VD.casualConversion_Cat_ProcessQueries_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Casual Conversion as Cateogry and Request Casual Assessment as subcategory is getting assigned to Advisory Admin queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Casual Conversion form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnCasualConversionTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.casualConversion_cat_RequestCasualAssessment_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryAdmin, VD.priority_Low, VD.casualConversion_Cat, VD.casualConversion_Cat_RequestCasualAssessment_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Casual Conversion as Cateogry and Technical Issues / Queries as subcategory is getting assigned to Advisory Admin queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Casual Conversion form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnCasualConversionTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.casualConversion_cat_TechnicalIssuesQueries_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryAdmin, VD.priority_Low, VD.casualConversion_Cat, VD.casualConversion_Cat_TechnicalIssuesQueries_SubCat);
        await homePage.close();
    });
});


/*//Report Requests
test('Verify whether the case created in Me@Woolies with Report Requests as Cateogry and Average Hours Report as subcategory is getting assigned to Advisory Payroll queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Report Requests form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnReportRequestsTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.reportRequests_Cat_AverageHoursReport_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryPayroll, VD.priority_Low, VD.casualConversion_Cat, VD.casualConversion_Cat_ProcessQueries_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Report Requests as Cateogry and Changes to Existing Report as subcategory is getting assigned to Advisory Payroll queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Report Requests form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnReportRequestsTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.reportRequests_Cat_ChangestoExistingReport_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryPayroll, VD.priority_Low, VD.casualConversion_Cat, VD.casualConversion_Cat_RequestCasualAssessment_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Report Requests as Cateogry and HR Report Access as subcategory is getting assigned to Advisory Payroll queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Report Requests form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnReportRequestsTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.reportRequests_Cat_HRReportAccess_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryPayroll, VD.priority_Low, VD.casualConversion_Cat, VD.casualConversion_Cat_TechnicalIssuesQueries_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Report Requests as Cateogry and Learning Report as subcategory is getting assigned to Advisory Payroll queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Report Requests form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnReportRequestsTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.reportRequests_Cat_LearningReport_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryPayroll, VD.priority_Low, VD.casualConversion_Cat, VD.casualConversion_Cat_ProcessQueries_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Report Requests as Cateogry and Payroll Data - Employee Earnings Report as subcategory is getting assigned to Advisory Payroll queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Report Requests form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnReportRequestsTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.reportRequests_Cat_PayrollDataEmployeeEarningsReport_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryPayroll, VD.priority_Low, VD.casualConversion_Cat, VD.casualConversion_Cat_RequestCasualAssessment_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Report Requests as Cateogry and Payroll Data - Finance Report as subcategory is getting assigned to Advisory Payroll queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Report Requests form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnReportRequestsTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.reportRequests_Cat_PayrollDataFinanceReport_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryPayroll, VD.priority_Low, VD.casualConversion_Cat, VD.casualConversion_Cat_TechnicalIssuesQueries_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Report Requests as Cateogry and Payroll Data - Leave Report as subcategory is getting assigned to Advisory Payroll queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Report Requests form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnReportRequestsTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.reportRequests_Cat_PayrollDataLeaveReport_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryPayroll, VD.priority_Low, VD.casualConversion_Cat, VD.casualConversion_Cat_ProcessQueries_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Report Requests as Cateogry and Payroll Data - Superannuation Report as subcategory is getting assigned to Advisory Payroll queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Report Requests form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnReportRequestsTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.reportRequests_Cat_PayrollDataSuperannuationReport_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryPayroll, VD.priority_Low, VD.casualConversion_Cat, VD.casualConversion_Cat_RequestCasualAssessment_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Report Requests as Cateogry and People Data report as subcategory is getting assigned to Advisory Payroll queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Report Requests form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnReportRequestsTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.reportRequests_Cat_PeopleDatareport_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryPayroll, VD.priority_Low, VD.casualConversion_Cat, VD.casualConversion_Cat_TechnicalIssuesQueries_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Report Requests as Cateogry and Team Member Report as subcategory is getting assigned to Advisory Payroll queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Report Requests form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnReportRequestsTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.reportRequests_Cat_TeamMemberReport_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryPayroll, VD.priority_Low, VD.casualConversion_Cat, VD.casualConversion_Cat_ProcessQueries_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Report Requests as Cateogry and Wage Costing Report as subcategory is getting assigned to Advisory Payroll queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Report Requests form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnReportRequestsTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.reportRequests_Cat_WageCostingReport_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryPayroll, VD.priority_Low, VD.casualConversion_Cat, VD.casualConversion_Cat_RequestCasualAssessment_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Report Requests as Cateogry and WFC - Store Team Member Punch / Clock as subcategory is getting assigned to Advisory Payroll queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Report Requests form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnReportRequestsTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.reportRequests_Cat_WFCStoreTeamMemberPunchClock_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryPayroll, VD.priority_Low, VD.casualConversion_Cat, VD.casualConversion_Cat_TechnicalIssuesQueries_SubCat);
        await homePage.close();
    });
}); */


//Workplace Adjustment Category
test('Verify whether the case created in Me@Woolies with Workplace Ajustment & Flexible Work Request as Cateogry and Health Related Matters as subcategory is getting assigned to ER Advisory queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Workplace Adjustment Category form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnWorkplaceAdjustmentTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.workplaceAdjustmentFlexibleWorkRequest_Cat_HealthRelatedMatters_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_ER, VD.caseOwner_ERAdvisory, VD.priority_Low, VD.employeeRelations_Cat, VD.employeeRelations_Cat_HealthRelatedMatters_SubCat);
        await homePage.close();
    });
});




//leaving the Company Category
test('Verify whether the case created in Me@Woolies with Leaving the Company as Cateogry and Death in Service as subcategory is getting assigned to Payroll AU Service Delivery queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('leaving the Company form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnLeavingTheCompanyTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.leavingtheCompany_Cat_DeathinService_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_PayrollAUServiceDelivery, VD.priority_Medium, VD.leavingtheCompany_Cat, VD.leavingtheCompany_Cat_DeathinService_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Leaving the Company as Cateogry and Deed of Release as subcategory is getting assigned to Payroll AU Service Delivery  queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('leaving the Company form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnLeavingTheCompanyTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.leavingtheCompany_Cat_DeedofRelease_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_PayrollAUServiceDelivery, VD.priority_High, VD.leavingtheCompany_Cat, VD.leavingtheCompany_Cat_DeedofRelease_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Leaving the Company as Cateogry and Exit survey as subcategory is getting assigned to Advisory Payroll queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('leaving the Company form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnLeavingTheCompanyTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.leavingtheCompany_Cat_Exitsurvey_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryPayroll, VD.priority_Low, VD.leavingtheCompany_Cat, VD.leavingtheCompany_Cat_Exitsurvey_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Leaving the Company  as Cateogry and System Navigation as subcategory is getting assigned to Advisory Payroll queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('leaving the Company form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnLeavingTheCompanyTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.leavingtheCompany_Cat_SystemNavigation_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryPayroll, VD.priority_Low, VD.leavingtheCompany_Cat, VD.leavingtheCompany_Cat_SystemNavigation_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Leaving the Company  as Cateogry and Termination Advice Form as subcategory is getting assigned to Payroll AU Service Delivery queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('leaving the Company form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnLeavingTheCompanyTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.leavingtheCompany_Cat_TerminationAdviceForm_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_PayrollAUServiceDelivery, VD.priority_High, VD.leavingtheCompany_Cat, VD.leavingtheCompany_Cat_TerminationAdviceForm_SubCat);
        await homePage.close();
    });
});



// Kronos Category
test('Verify whether the case created in Me@Woolies with Kronos as Cateogry and Kronos Planned Leave as subcategory is getting assigned to Advisory Payroll queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Kronos form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnKronsTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.kronos_cat_KronosPlannedLeave_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryPayroll, VD.priority_Low, VD.kronos_Cat, VD.kronos_Cat_KronosPlannedLeave_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Kronos as Cateogry and Kronos Trading Hours as subcategory is getting assigned to People Systems - Productivity queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Kronos form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnKronsTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.kronos_cat_KronosTradingHours_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_PeopleSystemsProductivity, VD.priority_Low, VD.kronos_Cat, VD.kronos_Cat_KronosTradingHours_SubCat);
        await homePage.close();
    });
});


//Team Data App Category
test('Verify whether the case created in Me@Woolies with Team Data App as Cateogry and Team Data App as subcategory is getting assigned to Advisory Payroll queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Team Data App form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnTeamDataAppTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.teamDataApp_cat_TeamDataApp_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryPayroll, VD.priority_Low, VD.teamDataApp_Cat, VD.teamDataApp_Cat_TeamDataApp_SubCat);
        await homePage.close();
    });
});

//Success Factors Technical Issue Category
test('Verify whether the case created in Me@Woolies with Success Factors Technical Issue as Cateogry is getting assigned to Advisory Payroll queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Success Factors Technical Issue form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnSuccessFactorsTechnicalIssuesTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        //await woolies.selectteamDataAppCatTeamDataAppSubcat();
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryPayroll, VD.priority_Low, VD.successFactorsTechnicalIssues_Cat, VD.SuccessFactorsTechnicalIssues_Cat_Null_SubCat);
        await homePage.close();
    });
});



//Pay and the Basics Category
test('Verify whether the case created in Me@Woolies with Pay and the Basics Cateogry and Adhoc (No Pay) as subcategory is getting assigned to Payroll AU Service Delivery queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Pay and the Basics form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnpayAndBasicsTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.payandtheBasics_Cat_AdhocNoPay_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_PayrollAUServiceDelivery, VD.priority_High, VD.payandtheBasics_Cat, VD.payandtheBasics_Cat_AdhocNoPay_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Pay and the Basics Cateogry and Adhoc (Partial Pay) as subcategory is getting assigned to Payroll AU Service Delivery queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Pay and the Basics form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnpayAndBasicsTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.payandtheBasics_Cat_AdhocPartialPay_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_PayrollAUServiceDelivery, VD.priority_Medium, VD.payandtheBasics_Cat, VD.payandtheBasics_Cat_AdhocPartialPay_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Pay and the Basics Cateogry and Allowances as subcategory is getting assigned to Payroll AU Service Delivery queuen', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Pay and the Basics form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnpayAndBasicsTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.payandtheBasics_Cat_Allowances_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_PayrollAUServiceDelivery, VD.priority_Low, VD.payandtheBasics_Cat, VD.payandtheBasics_Cat_Allowances_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Pay and the Basics Cateogry and Award Arrangements as subcategory is getting assigned to Advisory Payroll queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Pay and the Basics form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnpayAndBasicsTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.payandtheBasics_Cat_AwardArrangements_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryPayroll, VD.priority_Medium, VD.payandtheBasics_Cat, VD.payandtheBasics_Cat_AwardArrangements_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Pay and the Basics Cateogry and Commission Payments as subcategory is getting assigned to Payroll AU Service Delivery queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Pay and the Basics form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnpayAndBasicsTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.payandtheBasics_Cat_CommissionPayments_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_PayrollAUServiceDelivery, VD.priority_Low, VD.payandtheBasics_Cat, VD.payandtheBasics_Cat_CommissionPayments_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Pay and the Basics Cateogry and Confirmation of Employment as subcategory is getting assigned to Advisory Payroll queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Pay and the Basics form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnpayAndBasicsTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.payandtheBasics_Cat_ConfirmationofEmployment_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryPayroll, VD.priority_Medium, VD.payandtheBasics_Cat, VD.payandtheBasics_Cat_ConfirmationofEmployment_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Pay and the Basics Cateogry and Contract Hours, Job and Compensation as subcategory is getting assigned to Advisory Payroll queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Pay and the Basics form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnpayAndBasicsTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.payandtheBasics_Cat_ContractHoursJobandCompensation_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryPayroll, VD.priority_Low, VD.payandtheBasics_Cat, VD.payandtheBasics_Cat_ContractHoursJobandCompensation_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Pay and the Basics Cateogry and Cross Charge as subcategory is getting assigned to Payroll AU Service Delivery queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Pay and the Basics form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnpayAndBasicsTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.payandtheBasics_Cat_CrossCharge_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_PayrollAUServiceDelivery, VD.priority_Medium, VD.payandtheBasics_Cat, VD.payandtheBasics_Cat_CrossCharge_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Pay and the Basics Cateogry and Deductions & Reimbursement as subcategory is getting assigned to Payroll AU Service Delivery queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Pay and the Basics form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnpayAndBasicsTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.payandtheBasics_Cat_DeductionsReimbursement_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_PayrollAUServiceDelivery, VD.priority_Low, VD.payandtheBasics_Cat, VD.payandtheBasics_Cat_DeductionsReimbursement_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Pay and the Basics Cateogry and Garnishees as subcategory is getting assigned to Payroll AU Service Delivery queuen', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Pay and the Basics form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnpayAndBasicsTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.payandtheBasics_Cat_Garnishees_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_PayrollAUServiceDelivery, VD.priority_Low, VD.payandtheBasics_Cat, VD.payandtheBasics_Cat_Garnishees_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Pay and the Basics Cateogry and Government Paid Parental Leave as subcategory is getting assigned to Advisory Payrollqueue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Pay and the Basics form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnpayAndBasicsTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.payandtheBasics_Cat_GovernmentPaidParentalLeave_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryPayroll, VD.priority_Low, VD.payandtheBasics_Cat, VD.payandtheBasics_Cat_GovernmentPaidParentalLeave_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Pay and the Basics Cateogry and Group Salary Continuance as subcategory is getting assigned to Advisory Payrollqueue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Pay and the Basics form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnpayAndBasicsTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.payandtheBasics_Cat_GroupSalaryContinuance_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryPayroll, VD.priority_Low, VD.payandtheBasics_Cat, VD.payandtheBasics_Cat_GroupSalaryContinuance_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Pay and the Basics Cateogry and Headcount Management - Contractor as subcategory is getting assigned to Advisory Payroll queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Pay and the Basics form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnpayAndBasicsTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.payandtheBasics_Cat_HeadcountManagementContractor_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryPayroll, VD.priority_Medium, VD.payandtheBasics_Cat, VD.payandtheBasics_Cat_HeadcountManagementContractor_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Pay and the Basics Cateogry and Leave as subcategory is getting assigned to Advisory Payroll queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Pay and the Basics form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnpayAndBasicsTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.payandtheBasics_Cat_Leave_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryPayroll, VD.priority_Low, VD.payandtheBasics_Cat, VD.payandtheBasics_Cat_Leave_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Pay and the Basics Cateogry and Leave Forms as subcategory is getting assigned to Payroll AU Service Delivery queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Pay and the Basics form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnpayAndBasicsTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.payandtheBasics_Cat_LeaveForms_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_PayrollAUServiceDelivery, VD.priority_Medium, VD.payandtheBasics_Cat, VD.payandtheBasics_Cat_LeaveForms_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Pay and the Basics Cateogry and Leave Historical Corrections as subcategory is getting assigned to Advisory Payroll queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Pay and the Basics form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnpayAndBasicsTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.payandtheBasics_Cat_LeaveHistoricalCorrections_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryPayroll, VD.priority_Low, VD.payandtheBasics_Cat, VD.payandtheBasics_Cat_LeaveHistoricalCorrections_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Pay and the Basics Cateogry and New Starter Forms as subcategory is getting assigned to Payroll AU Service Delivery queuen', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Pay and the Basics form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnpayAndBasicsTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.payandtheBasics_Cat_NewStarterForms_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_PayrollAUServiceDelivery, VD.priority_Medium, VD.payandtheBasics_Cat, VD.payandtheBasics_Cat_NewStarterForms_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Pay and the Basics Cateogry and Organisational Management as subcategory is getting assigned to People Systems - Kronos queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Pay and the Basics form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnpayAndBasicsTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.payandtheBasics_Cat_OrganisationalManagement_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_PeopleSystemsKronos, VD.priority_Low, VD.payandtheBasics_Cat, VD.payandtheBasics_Cat_OrganisationalManagement_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Pay and the Basics Cateogry and Other as subcategory is getting assigned to Advisory Payroll queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Pay and the Basics form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnpayAndBasicsTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.payandtheBasics_Cat_Other_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryPayroll, VD.priority_Low, VD.payandtheBasics_Cat, VD.payandtheBasics_Cat_Other_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Pay and the Basics Cateogry and Overpayment as subcategory is getting assigned to Payroll AU Service Delivery queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Pay and the Basics form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnpayAndBasicsTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.payandtheBasics_Cat_Overpayment_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_PayrollAUServiceDelivery, VD.priority_Low, VD.payandtheBasics_Cat, VD.payandtheBasics_Cat_Overpayment_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Pay and the Basics Cateogry and Parental Leave as subcategory is getting assigned to Advisory Payroll queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Pay and the Basics form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnpayAndBasicsTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.payandtheBasics_Cat_ParentalLeave_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryPayroll, VD.priority_Low, VD.payandtheBasics_Cat, VD.payandtheBasics_Cat_ParentalLeave_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Pay and the Basics Cateogry and Pay Correction as subcategory is getting assigned to Advisory Payroll queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Pay and the Basics form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnpayAndBasicsTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.payandtheBasics_Cat_PayCorrection_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryPayroll, VD.priority_Low, VD.payandtheBasics_Cat, VD.payandtheBasics_Cat_PayCorrection_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Pay and the Basics Cateogry and Payment Summaries as subcategory is getting assigned to Advisory Payroll queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Pay and the Basics form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnpayAndBasicsTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.payandtheBasics_Cat_PaymentSummaries_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryPayroll, VD.priority_Low, VD.payandtheBasics_Cat, VD.payandtheBasics_Cat_PaymentSummaries_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Pay and the Basics Cateogry and Personal Details as subcategory is getting assigned to Advisory Payroll queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Pay and the Basics form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnpayAndBasicsTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.payandtheBasics_Cat_PersonalDetails_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryPayroll, VD.priority_Low, VD.payandtheBasics_Cat, VD.payandtheBasics_Cat_PersonalDetails_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Pay and the Basics Cateogry and Pre-SAP Adjustment as subcategory is getting assigned to Payroll AU Service Delivery queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Pay and the Basics form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnpayAndBasicsTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.payandtheBasics_Cat_PreSAPAdjustmentSubcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_PayrollAUServiceDelivery, VD.priority_Medium, VD.payandtheBasics_Cat, VD.payandtheBasics_Cat_PreSAPAdjustment_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Pay and the Basics Cateogry and Retrospective Edits as subcategory is getting assigned to Advisory Payroll queuen', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Pay and the Basics form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnpayAndBasicsTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.payandtheBasics_Cat_RetrospectiveEdits_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryPayroll, VD.priority_Low, VD.payandtheBasics_Cat, VD.payandtheBasics_Cat_RetrospectiveEdits_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Pay and the Basics Cateogry and Salary Sacrifice as subcategory is getting assigned to Payroll AU Service Delivery queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Pay and the Basics form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnpayAndBasicsTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.payandtheBasics_Cat_SalarySacrifice_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_PayrollAUServiceDelivery, VD.priority_Low, VD.payandtheBasics_Cat, VD.payandtheBasics_Cat_SalarySacrifice_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Pay and the Basics Cateogry and Separation Certificates as subcategory is getting assigned to Advisory Payroll queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Pay and the Basics form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnpayAndBasicsTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.payandtheBasics_Cat_SeparationCertificates_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryPayroll, VD.priority_Low, VD.payandtheBasics_Cat, VD.payandtheBasics_Cat_SeparationCertificates_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Pay and the Basics Cateogry and Superannuation Processing as subcategory is getting assigned to Benefits queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Pay and the Basics form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnpayAndBasicsTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.payandtheBasics_Cat_SuperannuationProcessing_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_Benefits, VD.priority_Low, VD.payandtheBasics_Cat, VD.payandtheBasics_Cat_SuperannuationProcessing_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Pay and the Basics Cateogry and Suspension as subcategory is getting assigned to Payroll AU Service Delivery queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Pay and the Basics form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnpayAndBasicsTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.payandtheBasics_Cat_Suspension_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_PayrollAUServiceDelivery, VD.priority_Low, VD.payandtheBasics_Cat, VD.payandtheBasics_Cat_Suspension_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Pay and the Basics Cateogry and System Navigation as subcategory is getting assigned to Advisory Payroll queuen', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Pay and the Basics form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnpayAndBasicsTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.payandtheBasics_Cat_SystemNavigation_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryPayroll, VD.priority_Low, VD.payandtheBasics_Cat, VD.payandtheBasics_Cat_SystemNavigation_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Pay and the Basics Cateogry and Tax Form - IR330 as subcategory is getting assigned to Advisory Payroll queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Pay and the Basics form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnpayAndBasicsTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.payandtheBasics_Cat_TaxFormIR330_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryPayroll, VD.priority_Low, VD.payandtheBasics_Cat, VD.payandtheBasics_Cat_TaxFormIR330_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Pay and the Basics Cateogry and Time and Attendance as subcategory is getting assigned to Advisory Payroll queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Pay and the Basics form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnpayAndBasicsTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.payandtheBasics_Cat_TimeandAttendance_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryPayroll, VD.priority_Low, VD.payandtheBasics_Cat, VD.payandtheBasics_Cat_TimeandAttendance_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Pay and the Basics Cateogry and Timesheets (non-Kronos only) as subcategory is getting assigned to Payroll AU Service Delivery queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Pay and the Basics form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnpayAndBasicsTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.payandtheBasics_Cat_TimesheetsnonKronosonly_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_PayrollAUServiceDelivery, VD.priority_High, VD.payandtheBasics_Cat, VD.payandtheBasics_Cat_TimesheetsnonKronosonly_SubCat);
        await homePage.close();
    });
});
test('Verify whether the case created in Me@Woolies with Pay and the Basics Cateogry and Wage Costing Report as subcategory is getting assigned to Advisory Payroll queue', async ({ page }) => {
    let homePage, wooliesPage;
    let caseNumber;
    const login = new LoginPage(page);
    await test.step('Login Page', async () => {
        await login.goToLoginPage();
        await login.login(testdata.username, testdata.password);
    });
    const home = new HomePage(page);
    await test.step('Click Setup', async () => {
        homePage = await home.userLogin(testdata.loginuser)
    });
    const home1 = new HomePage(homePage);
    await test.step('Navigate to Me@Woolies', async () => {
        await home1.clickOnAppLauch();
        await home1.searchForMeAtWoolies(testdata.searchWoolies);
        wooliesPage = await home1.clickOnMeAtWoolies();

    });
    const woolies = new MeAtWooliesPage(wooliesPage);
    await test.step('Pay and the Basics form', async () => {
        await woolies.clickOnpeopleRequest();
        await woolies.clickOnpayAndBasicsTitle();
        await woolies.clickonRaisingSomeone();
        await woolies.clickOnNewRequest();
        await woolies.fillTheExistingNumber(testdata.existingCaseNumber);
        await woolies.selectSubcatDropdown(CS.payandtheBasics_Cat_WageCostingReport_Subcat);
        await woolies.fillTheName(testdata.firstName);
        await woolies.clickOnNext();
        await woolies.fillTheSubject(testdata.subject);
        await woolies.clickOnNext();
        await woolies.fillThePhoneNumber(testdata.phoneNumber);
        await woolies.fillTheEmail(testdata.email);
        await woolies.clickOnSubmit();
        caseNumber = await woolies.getCaseNumber();
        console.log(caseNumber);
        await wooliesPage.close();
    });

    const home2 = new HomePage(homePage);
    await test.step('Verification of case details', async () => {
        await home2.clickOnUserLogout();
        await home2.clickOnAppLauch();
        await home2.searchForPeopleServices(testdata.searchPeopleServices);
        await home2.clickOnPeopleServices();
        await home2.pageReload();
        await home2.clcikOnGlobalSearch();
        await home2.enterTheCaseNumber(caseNumber);
        await home2.clickCaseNumber(caseNumber);
        await home2.verifyCaseDetails(VD.recordType_Query, VD.caseOwner_AdvisoryPayroll, VD.priority_Low, VD.payandtheBasics_Cat, VD.payandtheBasics_Cat_WageCostingReport_SubCat);
        await homePage.close();
    });
});








