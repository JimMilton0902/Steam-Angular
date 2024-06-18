var express = require('express');
var hoadonModel = require('../model/hoadon');
const app = express.Router();

app.post('/hoadon', async (req, res) =>{
    console.log(req.body);
    try{
        const newInvoice = new hoadonModel(req.body);
        await newInvoice.save();
        res.status(201).send(newInvoice);
    }catch(error){
        res.status(400).send({ error: error.message });
    }
});

module.exports = app;
