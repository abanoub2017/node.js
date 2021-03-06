const express = require('express')
const bodyParser = require('body-parser');
const path = require('path')
const rootDir = require('./helper/path')
const app = express();

const adminData = require('./routes/admin')
const postRouter = require('./routes/post');

app.use(bodyParser.urlencoded({extended: false}));

// Static Route
app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use('/admin',adminData.routes)
app.use(postRouter)

// Handel 404 page not found
app.use((req,res,next) => {
    res.status(404).sendFile(path.join(rootDir, 'views' , '404.html'))
})



app.listen(3000)
