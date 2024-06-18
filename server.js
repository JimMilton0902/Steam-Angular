const express = require('express');
const mongoose = require('mongoose');
const danhmucRouter = require('./router/danhmucRouter');
const userRouter = require('./router/userRouter')
const sanpham = require('./router/sanphamRouter')
const hoadon = require('./router/hoadonRouter')
const bodyParser = require('body-parser');
const guiemail = require('./router/guiemail')
const cors = require('cors');
const app = express();
const port = 3001;
const url = "mongodb://127.0.0.1:27017/web18320";


app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
     "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
mongoose.connect(url);
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(danhmucRouter);
app.use(userRouter);
app.use(guiemail);
app.use(sanpham);
app.use(hoadon);




app.listen(port, () => console.log(`listening on :${port}`));
