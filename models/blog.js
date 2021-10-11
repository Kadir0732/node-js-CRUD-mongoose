const mongoose = require("mongoose")
const schema = mongoose.Schema

const blog = new schema({
    blogName: String,
    blogShortText: String,
    blogLongText: String,
    blogCoverImgUrl: String
}, { timestamps: true })

module.exports = mongoose.model("blog",blog)