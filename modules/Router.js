const express = require("express")
const Router = express.Router()
const controllerBlog = require("../controllers/controllerBlog")


Router.get("/api/blog/getall",controllerBlog.getAll)
Router.get("/api/blog/find/:id",controllerBlog.find)
Router.get("/api/blog/add",controllerBlog.add)
Router.get("/api/blog/update/:id",controllerBlog.update)
Router.get("/api/blog/delete/:id",controllerBlog.delete)

module.exports = Router
