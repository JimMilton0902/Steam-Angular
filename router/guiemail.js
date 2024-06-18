var express =require('express')
const nodemailer =  require('nodemailer');
 var app = express();

app.post('/send-mail/:id', function(req, res) {
    let {tenhd, customer, email, ngaytao, tongtien, CTHD} = req.body;
    let text = "";
    text += '<table border = 1 width = 100%><tr>'
    text += '<td>tensp</td><td>GiaSP</td><td>X</td><td>SoLuong</td><td>=</td><td>Tiền</td>'
    text += '</tr>'
    CTHD.forEach(e => {
        text += '<tr>'
        text += "<td>" + e.tensp +"</td>"
        text += "<td>" + e.giasp +"</td>"
        text += "<td>X</td>"
        text += "<td>" + e.soluong +"</td>"
        text += "<td>=</td>"
        text += "<td>" + e.giasp *e.soluong + "</td>"
        text += '</tr>'
    });
    text += '</table>'
    var content = '';
    content += `
        <div style="padding: 10px; background-color: #003375">
            <div style="padding: 10px; background-color: white;">
                <h4 style="color: #0085ff">Gửi mail với nodemail và express</h4>
                <span style="color: black">Hóa đơn: ${tenhd}</span></br>
                <span style="color: black">Khách hàng: ${customer}</span></br>
                <span style="color: black">Email: ${email}</span></br>
                <span style="color: black">Ngày tạo HĐ: ${ngaytao}</span></br>
                <span style="color: black">Tổng tiền: ${tongtien}</span></br>
                <span style="color: black">Danh sách sản phẩm</span></br>
                <span style="color: black">${text}</span></br>
            </div> 
        </div>
    `;
    var mainOptions = { // thiết lập đối tượng, nội dung gửi mail
        from: 'doquyphuc117@gmail.com',
        to: req.params.id,
        subject: 'Test Nodemailer',
        text: 'Your text is here',//Thường thi mình không dùng cái này thay vào đó mình sử dụng html để dễ edit hơn
        html: content //Nội dung html mình đã tạo trên kia :))
    }
    transporter.sendMail(mainOptions, function(err, info){
        if (err) {
            console.log(err);
            req.flash('mess', 'Lỗi gửi mail: '+err); //Gửi thông báo đến người dùng
            res.redirect('/');
        } else {
            console.log('Message sent: ' +  info.response);
            req.flash('mess', 'Một email đã được gửi đến tài khoản của bạn'); //Gửi thông báo đến người dùng
            res.redirect('/');
        }
    });
});

module.exports = app;