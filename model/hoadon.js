const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    _id: String,
    tensp: String,
    hinhsp: String,
    giasp: String,
    soluong: Number,
});

const invoiceSchema = new mongoose.Schema({
    tenhd: String,
    customer: String,
    email: String,
    ngaytao: String,
    tongtien: Number,

    CTHD: [itemSchema]
});

module.exports = mongoose.model('Invoice', invoiceSchema);