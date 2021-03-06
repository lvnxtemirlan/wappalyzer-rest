const express = require("express");
const { Router } = require("express");
const Wappalyzer = require('wappalyzer');

const PORT = process.env.PORT || 8089;

const app = express();
const router = Router();
 
const options = {
    debug: false,
    delay: 500,
    headers: {},
    maxDepth: 3,
    maxUrls: 10,
    maxWait: 5000,
    recursive: true,
    probe: true,
    userAgent: 'Wappalyzer',
    htmlMaxCols: 2000,
    htmlMaxRows: 2000,
};

router.get("/wappalyzer", async (req, res) => {
    try {
        const urls = JSON.parse(req.query.urls);
        const wappalyzer = await new Wappalyzer(options);
        await wappalyzer.init();

        const results = await Promise.all(
            urls.map(async url => ({
                url, results: await wappalyzer.open(url).analyze()
            }))
        );
        res.send(JSON.stringify(results, null, 2));
    } catch (e) {
        console.error(e);
    }
});

app.use(router);


const start = async () => {
	app.listen(PORT);
	console.log(`Started on ${ PORT } port`);
}


start();