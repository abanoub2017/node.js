const express = require('express')
const bodyParser = require('body-parser');
const path = require('path')
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminData = require('./routes/admin')
const postRouter = require('./routes/post');

app.use(bodyParser.urlencoded({
    extended: false
}));

// Static Route
app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use('/admin', adminData.routes)
app.use(postRouter)

// Handel 404 page not found
app.use((req, res, next) => {
    res.status(404).render('404', {
        title: 'Page Not Found'
    })
})



app.listen(3000)