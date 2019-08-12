const puppeteer = require('puppeteer');

async function runPuppeteer(post) {
	const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
	const page = await browser.newPage();
	const cookie = [{
		"expirationDate": +new Date() + 3600,
		"hostOnly": false,
		"httpOnly": false,
		"name": "flag",
		"path": "/",
		"sameSite": "no_restriction",
		"secure": false,
		"session": false,
		"storeId": "0",
		"value": "flag{you_are_the_cookie_monster}",
		"id": 1
	}];

	await page.goto('http://localhost:3001/');
	await page.setCookie(...cookie);
	await page.setJavaScriptEnabled(true);
	await page.evaluate(post);
	await browser.close();
}

module.exports = runPuppeteer;