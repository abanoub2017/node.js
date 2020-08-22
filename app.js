const express = require('express')
const bodyParser = require('body-parser');
const path = require('path')
const app = express();

const expressHbs = require('express-handlebars')


app.engine('hbs', expressHbs({
    layoutsDir: 'views/layouts',
    defaultLayout: 'main-layout',
    extname: 'hbs'
}));
app.set('view engine', 'hbs');
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