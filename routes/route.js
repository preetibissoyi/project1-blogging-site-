const express = require('express');
const router = express.Router();
const authorController= require("../Controller/authorController")
const blogController= require("../Controller/blogController")
const Middleware = require("../middleware/auth")

router.post('/author',authorController.createAuthor) // Creating Author Data ok

router.post('/login',authorController.loginAuthor)  //User login and generate token ok

router.post("/blogs",Middleware.authenticate,Middleware.auth2,blogController.createBlog)  // Creating blog ok

router.get('/getblogs',blogController.getblogwithauthor) //Getting Blog data with Author details EXTRA

router.get('/blogs',Middleware.authenticate,blogController.getblog) //Get Filtered Vlogs ok

router.put('/blogs/:blogId',Middleware.authenticate,blogController.updatedBlog) // Update Blog ok

router.delete("/blogs/:blogId",Middleware.authenticate,blogController.deleteBlog) // Delete blog by blogId ok

router.delete("/blogs",Middleware.authenticate,blogController.deleteDocument) // Delete blog by blogId OK



module.exports = router;