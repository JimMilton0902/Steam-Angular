const express = require('express');
const sanpham = require('../model/sanpham');
const danhmuc = require('../model/danhmuc');

const app = express.Router();
// them anh
// app.post('/sanpham/upload',upload.single("image"),async(req,res)=>{
      
// });
//http://localhost:3001/sanpham
//them fruit
app.post('/sanpham',async(req,res)=>{
    // upload.array('image',2)
    // const {files} = req //files nếu upload nhiều, file new upload 1 file
    // const urlsImage= files.map((file)=> file.originalname)
    const name = req.body.name;
    const quantity = req.body.quantity;
    const price = req.body.price;
    const status = req.body.status;
    const image = req.body.image;
    // const image = req.file.originalname
    // const image = urlsImage;
    const description = req.body.description;
    const id_danhmuc = req.body.id_danhmuc
    const data ={ name, quantity,price,status,image,description,id_danhmuc}
    const u = new sanpham(data);
    try {
        await u.save();
        res.send(u);
    } catch (error) {
        res.status(500).send(error);
    }
});

// xoa san pham
app.delete('/sanpham/:id',async(req,res)=>{
    
    try {
       await sanpham.findByIdAndDelete(req.params.id,req.body);
       res.send();
    } catch (error) {
        res.status(500).send(error);
    }
})

// //get danh sach sp
// app.get('/sps_dm', async(req,res)=>{
//     const sps = await(sanpham.find({}));
//     const dmsp = await  Promise.all(sps.map(async(sp) => { 
//         const dms = await danhmuc.find({_id:sp.id_danhmuc});
//         // const dms = sp.id_danhmuc
//             return {dms};
//         }));
//     try {
//         res.json(dmsp);
//     } catch (error) {
//         res.status(500).send(error);
//     }
// });


app.get('/sanpham', async(req,res)=>{
    const sp = await(sanpham.find({}));
    sp.sort((a, b) => b.createdAt - a.createdAt);
    try {
        res.send(sp);
    } catch (error) {
        res.status(500).send(error);
        
    }
});


//lay sp theo danh muc
app.get('/dmsp/:id',async(req,res)=>{
    const danhsach = await sanpham.find({id_danhmuc:req.params.id})
    try {
        res.json(danhsach);
    } catch (error) {
        res.status(500).send(error);
    }
});




app.get('/dmsp', async(req,res)=>{
    const dms = await(danhmuc.find());
    const dmsp = await Promise.all(dms.map(async (dm) => { 
        const products = await sanpham.find({ id_danhmuc: dm.id });
        let sortedProducts = products.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        let latestProducts = sortedProducts.slice(0, 5);
            return {_id:dm.id, name: dm.name, sanphams: latestProducts };
        }));
    try {
        res.json(dmsp);
    } catch (error) {
        res.status(500).send(error);
    }
});

// app.get('/dmsp', async(req,res)=>{
//     const dms = await(danhmuc.find());
//     const dmsp = await  Promise.all(dms.map(async (dm) => { 
//         const products = await sanpham.find({ id_danhmuc: dm.id });
//             return {_id:dm.id, name: dm.name, products: products };
//         }));
//     try {
//         res.json(dmsp);
//     } catch (error) {
//         res.status(500).send(error);
//     }
// });
// app.get('/dmsp', async(req,res)=>{
//     const dms = await(danhmuc.find({}));
//     const sps = await(sanpham.find({}));
//     const dmsp = dms.map(dm =>{
//         const sp_dm = sps.filter(sp=> sp.id_danhmuc == dm.id) ;
//         return {_id:dm.id,name:dm.name,sanpham:sp_dm}
//     })
//     try {
//         res.json(dmsp);
//     } catch (error) {
//         res.status(500).send(error);
//     }
// });

// lay 1 sp
app.get('/sanpham/:id', async(req,res)=>{
    const sp = await(sanpham.findById(req.params.id,res.body));
    try {
        res.send(sp);
    } catch (error) {
        res.status(500).send(error);
    }
});

// lấy danh sach sp theo danh muc
app.get('/sanpham/danhmuc/:id_danhmuc', async(req,res)=>{
    let id_danhmuc = req.params.id_danhmuc;
    const danhsach = await(sanpham.find({}));
    const sp = danhsach.filter(sp => sp.id_danhmuc == id_danhmuc);
    // res.json(sp);
    try {
        // res.send(sp);
        res.json(sp)
    } catch (error) {
        res.status(500).send(error);
    }
});

//cap nhat
app.put('/sanpham/:id', async(req,res)=>{
    try {
        await sanpham.findByIdAndUpdate(req.params.id,req.body)
        await sanpham.save()
        res.send()
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = app;