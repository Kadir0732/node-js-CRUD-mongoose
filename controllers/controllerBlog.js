const blog = require("../models/blog")
const mongoose = require("mongoose")


class controllerBlog {
    add = (req, res) => {
        res.send("blog add")
        new blog({
            blogName: "String",
            blogShortText: "String",
            blogLongText: "String",
            blogCoverImgUrl: "String"
        }).save()
        console.log("blog")
    }
    getAll = (req, res) => {
        blog.find().then((result) => {
            res.setHeader("content-type", "text/json")
            res.send(result)
        })

        console.log("blog select all")
    }
    find = (req, res) => {
        let id = req.params.id
        blog.find({
            _id: id
        }).then(result => {
            res.setHeader("content-type", "text/json")
            res.send(result)
        })
    }
    update = (req, res) => {
        let id = req.params.id
        blog.findOne({
            _id: id
        }, (err, findedBlog) => {
            if (err) {
                res.send(err)
            }
            else {
                findedBlog.blogName = "deneme"
                findedBlog.blogShortText = "denem kısa yazı"
                findedBlog.blogLongText = "denem Uzun yazı"
                findedBlog.blogCoverImgUrl = "deneme img"
                findedBlog.save().then(() => {
                    res.setHeader("content-type", "text/json")
                    res.send({ isSuscess: true })
                })
                    .catch(err => {
                        res.setHeader("content-type", "text/json")
                        res.send(
                            {
                                isSuscess: false,
                                errorMsg: err
                            }
                        )
                    })

            }
        })


    }
    delete = (req, res) => {
        let id = req.params.id
        blog.deleteOne({
            _id: id
        })
        .then(()=>{
            res.setHeader("content-type", "text/json")
            res.send({ isSuscess: true })
        })
        .catch(err => {
            res.setHeader("content-type", "text/json")
            res.send(
                {
                    isSuscess: false,
                    errorMsg: err
                }
            )
        })
          
    }
}

module.exports = new controllerBlog()