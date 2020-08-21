const path = require('path')
const rootDir = require('../helper/path')

const experss =  require('express')

const router = experss.Router();
const posts = []

router.get('/add-posts',(req , res , next) => {
    res.sendFile(path.join(rootDir , 'views' , 'add-posts.html'))
})

router.post('/add-posts' , (req, res , next) => {
    posts.push({title: req.body.title})
    res.redirect('/')
})

// module.exports = router 
exports.routes = router
exports.posts = posts