const puppeteer = require("puppeteer-extra");

const CHROME_EXECUTABLE =
    "C:/Program Files/Google/Chrome/Application/chrome.exe";

const CHROME_USER_DATA_DIR =
    "E:/Maplestory/MSU-Market-Analyzer/chrome-profile";

class Browser {

    constructor() {
        this.browser = null;
        this.page = null;
    }

    async launch() {

        this.browser = await puppeteer.launch({
    headless: false,
    executablePath: CHROME_EXECUTABLE,
    userDataDir: CHROME_USER_DATA_DIR,

    ignoreDefaultArgs: ['--disable-extensions'],

    args: [
        '--profile-directory=Profile 3',
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--start-maximized'
    ],

    defaultViewport: null
	});

        this.page = await this.browser.newPage();

        return this.page;

    }

    async close() {

        if (this.browser) {

            await this.browser.close();

        }

    }

}

module.exports = Browser;