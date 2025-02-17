export class LoginPage {
    constructor(page) {
        this.page = page;
        this.pageURL = 'https://peopleservices--wowpsuat.sandbox.my.salesforce.com/';
        this.userName = '#username';
        this.password = '#password';
        this.loginButton = '#Login';


    }

    async goToLoginPage() {
        await this.page.goto(this.pageURL);
    }

    async login(username, password) {
        await this.page.fill(this.userName, username);
        await this.page.fill(this.password, password);
        // await this.page.screenshot({ path: './screenshots/login.jpg' });
        await this.page.click(this.loginButton);
        await this.page.waitForLoadState('load');


    }

}