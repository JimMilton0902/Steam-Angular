import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Giohang } from '../giohang';
import { SanphamService } from '../../sanpham/sanpham.service';
import { Sanpham } from '../../sanpham/sanpham';
import { GiohangService } from '../giohang.service';
import { User } from '../../user/user';

@Component({
  selector: 'app-indexgh',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './indexgh.component.html',
  styleUrl: './indexgh.component.css'
})
export class IndexghComponent {
  Giohangs: Giohang[] = [];
  id!:string;
  constructor(
    public sanphamService:SanphamService,
    public giohangService:GiohangService,
    private router:Router,
    private route:ActivatedRoute
  ){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['SpId'];
    if(this.id != null){
      this.sanphamService.findSanpham(this.id).subscribe((data:Sanpham)=>{
        this.Themgiohang(data)
      }); 
    }else{
      var x = sessionStorage.getItem("giohang");
      if(x == null){
          this.Giohangs =[];
      }else{
        this.Giohangs = JSON.parse(x);
      }
    }
  }
  kiemtragiohang(id:string){
    for(let i = 0 ;i< this.Giohangs.length;i++){
      if(this.Giohangs[i].id == id){
        return i;
      }
    }
    return -1;
  }

  Themgiohang( data : Sanpham){
    var x = sessionStorage.getItem("giohang");
    if(x == null){
        this.Giohangs =[];
    }else{
      this.Giohangs = JSON.parse(x);
    }
    var gh: Giohang;
    gh = { id: data._id, tensp:data.name, giasp:data.price, soluong: 1 , hinhsp:data.image };
    let vitri = this.kiemtragiohang(data._id);
    if(vitri == -1){
      this.Giohangs.push(gh);
    }else{
      this.Giohangs[vitri].soluong++;
    }
    sessionStorage.setItem("giohang",JSON.stringify(this.Giohangs));
    // sessionStorage.clear();
  }
  decreate(id:string){
    var x = sessionStorage.getItem("giohang");
    if(x == null){
        this.Giohangs =[];
    }else{
      this.Giohangs = JSON.parse(x);
    }
    let vitri = this.kiemtragiohang(id);
    this.Giohangs[vitri].soluong--;
    sessionStorage.setItem("giohang",JSON.stringify(this.Giohangs));
  }
  increate(id:string){
    var x = sessionStorage.getItem("giohang");
    if(x == null){
        this.Giohangs =[];
    }else{
      this.Giohangs = JSON.parse(x);
    }
    let vitri = this.kiemtragiohang(id);
    this.Giohangs[vitri].soluong++;
    sessionStorage.setItem("giohang",JSON.stringify(this.Giohangs));
  }

  deletegh(id:string){
    var x = sessionStorage.getItem("giohang");
    if(x == null){
        this.Giohangs =[];
    }else{
      this.Giohangs = JSON.parse(x);
    }
    let vitri = this.kiemtragiohang(id);
    this.Giohangs.splice(vitri,1);
    sessionStorage.setItem("giohang",JSON.stringify(this.Giohangs));
  }
  tonghoadon(){
    var sum = 0;
    this.Giohangs.forEach((e) => sum += e.giasp * e.soluong);
    return sum;
  }
  thanhtoan(){
    var x = sessionStorage.getItem("user_session");
      if(x !== null){
        var user = JSON.parse(x);
        var tongtien = this.tonghoadon();
        var hoadon: any;
        hoadon = {
          "tenhd": "Thanh toan",
          "customer": "Quy Phuc",
          "email": "quyphuc1@gmail.com",
          "ngaytao": new Date(),
          "tongtien": 20000,
          "trang thai": "đang chờ",
          "CTHD": this.Giohangs,
        }
        this.giohangService.guiemail("quyphuc1@gmail.com",hoadon).subscribe((res:any)=>{});
        this.giohangService.createHoaDon(hoadon).subscribe((res:any)=>{
          this.router.navigateByUrl('/thanhtoan/index');
        })
        sessionStorage.clear();
      }
    }
}
