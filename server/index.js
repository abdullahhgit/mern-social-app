const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const router = require("./routes/posts");

const app = express();

const CONNECTION_URL = 'mongodb+srv://admin:admin1234@social-media-app-cluste.7kbb4n8.mongodb.net/'
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors())

app.use('/posts', router); 

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true}) // second params are optional to ensure that mongodb connection string parser successfully.
    .then(() => {
        app.listen(PORT, () => console.log(`App running on Port ${PORT} and mongoDB connected successfully`))
    })
    .catch((error) => {
        console.log(error.message)
    })
