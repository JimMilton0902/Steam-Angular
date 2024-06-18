var express = require('express')
var danhmuc = require('../model/danhmuc')
var app = express.Router();

//viet API
//lay danhmuc
app.get('/danhmuc', async(req,res)=>{
    const dm = await(danhmuc.find({}));
    try {
        res.send(dm);
    } catch (error) {
        res.status(500).send(error);
    }
});
//lấy mot danh muc
app.get('/danhmuc/:id',async(req,res)=>{
    const dm=  await(danhmuc.findById(req.params.id,req.body));
    try {
        res.send(dm);
    } catch (error) {
        res.status(500).send(error);
    }
});

//them danhmuc
app.post('/danhmuc',async(req,res)=>{
    const dm = new danhmuc(req.body);
    try {
        await dm.save();
        res.send(dm);
    } catch (error) {
        res.status(500).send(error);
    }
});

//xóa
app.delete('/danhmuc/:id',async(req,res)=>{
    try {
       await danhmuc.findByIdAndDelete(req.params.id,req.body);
       res.send();
    } catch (error) {
        res.status(500).send(error);
    }
})
//cap nhật
app.put('/danhmuc/:id', async(req,res)=>{
    try {
        await danhmuc.findByIdAndUpdate(req.params.id,req.body)
        await danhmuc.save()
        res.send();
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = app;

