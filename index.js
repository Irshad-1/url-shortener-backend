require('dotenv').config();
const express = require("express");
const cors = require("cors");
const connectDatabase = require("./database");
const urlRouter = require('./routes/url');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(logger);

app.use(urlRouter);

function logger(req, res, next) {
    console.info(new Date(), req.method, req.path);

    next();
}
connectDatabase().then(() => {
    app.listen(port, () => {
        console.log("Server running at http://localhost:3000");
    });
});
