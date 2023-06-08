const express = require('express');
const mongoose = require('mongoose');
const route  = require('./routes/route');
const app = express();
app.use(express.json({extended:true}));

mongoose.connect('mongodb+srv://rahulkumar:A8K4HFFnpjfeY3Pl@cluster0.pchlfj0.mongodb.net/Product_Management', { useNewUrlParser: true }).then(() => console.log('Mongodb is connected')).catch((err) => console.log(err));

app.use('/', route)
app.listen(3000, () => {
    console.log('Express app running')
})