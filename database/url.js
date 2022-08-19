const mongoose = require("mongoose");



const urlSchema = new mongoose.Schema(
    {
        shorturl: {
            type: String,
            required: true,
            unique: true
        },
        longurl: {
            type: String,
            required: true,
        },
        count: {
            type: Number,
        }
    }, { timestamps: true }
);

const Url = mongoose.model("shorteningurl", urlSchema);

module.exports = { Url };

