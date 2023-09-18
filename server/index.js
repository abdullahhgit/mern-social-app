import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors())

const CONNECTION_URL = 'mongodb+srv://admin:admin1234@social-media-app-cluste.7kbb4n8.mongodb.net/'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true}) // second params are optional to ensure that mongodb connection string parser successfully.
    .then(() => {
        app.listen(PORT, () => console.log(`App running on Port ${PORT} and mongoDB connected successfully`))
    })
    .catch((error) => {
        console.log(error.message)
    })
