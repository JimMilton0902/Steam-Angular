const express = require('express');
const userModel = require('../model/user');
const app = express.Router();
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

//add data
app.post('/user/dangky', async (req, res) => {
    const { fullname, email, password, phone, address, position } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);
    const user = new userModel({ fullname, email, password: hashPassword, phone, address, position });
    console.log(user);
    console.log(req.body);
    try {
        await user.save();
        res.send(user);
    } catch (error) {
        res.status(500).send(error);
    }
});

//login user
app.post('/user/dangnhap',async(req,res)=>{
    const { email, password} = req.body;
    const user = await(userModel.findOne({email}));
    if(user){
        const isMatch = bcrypt.compareSync(password, user.password);
        if(!isMatch) return res.sendStatus(401);
        delete user._doc.password;
        const token = jwt.sign({user},'abcd');
        return res.json({token, ...user._doc,fullname:user.fullname,email:user.email});
        // res.send(user);
    } else {    
        res.sendStatus(401);
    }
});

app.post('/user/token', async(req,res)=>{
    console.log(req.body.token);
    try{
        const user = jwt.verify(req.body.token,'abcd');
        //res.json({token});
        res.send(user);
        //console.log(user);
    }catch(error){
        res.sendStatus(400)
    };
});

//thay doi thong tin ca nhan
app.put('/user/:id', async (req, res) => {
    // upload.array('image', 2)
    const name = req.body.name;
    const phone = req.body.phone;
    const password = req.body.password;
    const address = req.body.address;
    const data = { name, phone, password, address }
    console.log(data);
    try {
        await (user.findByIdAndUpdate(req.params.id, data));
    
        res.send("");
    } catch (error) {
        res.status(500).send(error);
    }
});
// hien thi danh sach user
app.get('/user/view', async (req, res) => {
    try {
        const users = await userModel.find({});
        res.send(users);
    } catch (error) {
        res.status(500).send(error);
    }
});
module.exports = app;