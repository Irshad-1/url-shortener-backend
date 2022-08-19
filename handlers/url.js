
const shortid = require('shortid');
const { Url } = require('../database/url');

const shorturl = async (req, res) => {
    try {
        const { longurl } = req.body;

        const shorturl = shortid.generate();
        await Url.create({ shorturl, longurl, count: 0 });
        return res.status(201).send({ message: "Url created successfully" });

    } catch (error) {
        return res.status(500).send({ message: error || "Internal Server Error" });
    }
}
const redirectUrl = async (req, res) => {
    try {
        const { url } = req.params;
        const searchurl = await Url.findOne({ shorturl: url });
        if (searchurl) {

            let count = searchurl.count + 1;
            await Url.findOneAndUpdate({ shorturl: url }, { count: count });
            return res.redirect(searchurl.longurl);
        } else {
            return res.status(404).send({ message: 'invalid url' });
        }
    } catch (error) {
        return res.status(500).send({ message: error || "Internal Server Error" });
    }
}
const getAllUrls = async (req, res) => {
    try {
        const urls = await Url.find();
        return res.send(urls);
    } catch (error) {
        return res.status(500).send({ message: error || "Internal Server Error" });
    }
}
module.exports = { shorturl, redirectUrl, getAllUrls };