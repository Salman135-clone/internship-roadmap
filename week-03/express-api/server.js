const express = require('express');
const mongoose = require('mongoose');
// const mongooseSanitize = require('express-mongo-sanitize');
const expressWinston = require('express-winston');
const winston = require('winston')
const requestLogger = require('./requestLogger');

const productRoute = require('./routes/productRoute')
const authRoute = require('./routes/authRoute')

const env = require('dotenv');
const app = express();
env.config();


app.use(express.json());
app.use(requestLogger);



const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MONGODB_URL;

mongoose.connect(MONGOURL).then(() => {
    console.log(`Connected to MongoDB`);
}).catch(() => console.log(error))

app.use('/api', productRoute);
app.use('/api', authRoute);

app.listen(PORT, () => {
    console.log('Server using port', PORT)
})

// let products = [];
// let id = 1

// app.get('/product', (req, res) => {
//     res.status(200).json(products);
// })

// app.post('/product', (req, res) => {
//     const name = String(req.body.name)
//     const price = Number(req.body.price)

//     products.push({ id: id++, name, price })
//     res.status(201).json({ message: "Product created successfully" })
// })

// app.get('/product/:id', (req, res) => {
//     const productId = Number(req.params.id);

//     const findOne = products.find(u => u.id === productId);

//     if (!findOne) {
//         res.status(404).json({
//             message: "Product not found"
//         })
//     }

//     res.status(200).json(findOne);
// })

// app.patch('/product/:id', (req, res) => {
//     const productId = Number(req.params.id);
//     const name = String(req.body.name);
//     const price = Number(req.body.price);

//     const findItem = products.find(u => u.id === productId);

//     if (!findItem) {
//        return res.status(404).json({
//             message: "Product not found"
//         })
//     }
//     if(name) findItem.name = name;
//     if(price) findItem.price = price;
//     res.status(200).json({ message: "Product updated successfully",products:findItem })
// })



