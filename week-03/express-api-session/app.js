const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const env = require('dotenv');
const userRoute = require('./routes/userRoute');

env.config();

const app = express();
app.use(express.json());


app.use(session({
    secret: 'mysecretkey',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_URL,
        collectionName: 'sessions'
    })
}))


const dbUrl = process.env.MONGO_URL;
const port = process.env.PORT;

mongoose.connect(dbUrl).then(() => {
    console.log("Database connected");
}).catch(() => { console.log('Fail to connect database') })

app.get('/', (req, res) => {
    console.log(req.session);
    res.send("hello");
})

app.use('/api', userRoute);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});