const path = require('path')
const express = require('express');

const rootDir = require('../helper/path')
const adminData = require('./admin')

const router = express.Router();

router.get('/',(req , res , next) => {
    const posts = adminData.posts
    res.sendFile(path.join(rootDir , 'views' , 'posts.html'), {pos: posts , docTitle:'posts page'})
})


module.exports = router