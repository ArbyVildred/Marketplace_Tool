const Browser = require("./browser");

const MARKET_URL = "https://msu.io/marketplace/nft";

(async () => {

    const browser = new Browser();

    const page = await browser.launch();

    await page.goto(MARKET_URL, {

        waitUntil: "networkidle2"

    });

    console.log("");

    console.log("====================================");

    console.log("Marketplace opened successfully.");

    console.log("Close Chrome to finish.");

    console.log("====================================");

})();