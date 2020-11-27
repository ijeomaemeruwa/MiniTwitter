if(process.env.NODE_ENV !== 'production'){
    require("dotenv").config({path: __dirname + '/.env'})
}

const express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
const fileUpload = require("express-fileupload")
const path = require("path")

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false, limit: "10mb"}))
app.use(bodyParser.json({limit: "10mb"}))
app.use(cors())


const usersRoute = require('./routes/users');
app.use('/users', usersRoute);

const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})