const express = require("express");
const {
    shorturl, redirectUrl, getAllUrls
} = require("../handlers/url");
const urlRouter = express.Router();

urlRouter.post('/shorturl', shorturl);
urlRouter.get('/getall', getAllUrls);
urlRouter.get('/:url', redirectUrl);


module.exports = urlRouter;