const path = require('path')
const rootDir = require('../helper/path')

const experss = require('express')

const router = experss.Router();
const posts = []

router.get('/add-posts', (req, res, next) => {
    res.render('add-posts', {
        title: 'Add Posts',
        path: 'admin/add-posts',
        postsCSS: true,
        activeAddPost: true

    })
})

router.post('/add-posts', (req, res, next) => {
    posts.push({
        title: req.body.title
    })
    res.redirect('/')
})

// module.exports = router 
exports.routes = router
exports.posts = posts