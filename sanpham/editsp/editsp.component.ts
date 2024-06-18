import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Danhmuc } from '../../danhmuc/danhmuc';
import { SanphamService } from '../sanpham.service';
import { DanhmucService } from '../../danhmuc/danhmuc.service';
import { Sanpham } from '../sanpham';

@Component({
  selector: 'app-editsp',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './editsp.component.html',
  styleUrl: './editsp.component.css'
})
export class EditspComponent {

  form!:FormGroup;
  id!:string;
  danhmuc:Danhmuc[] =[];
  sanpham!:Sanpham ;
  name!:string;
  quantity!:number
  price!:number;
  status!:number;
  image!:string;
  id_danhmuc!:string;
  description!:string;
  url!:string;
  constructor(public sanphamService:SanphamService,public danhmucService:DanhmucService, private router:Router,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['SpId'];
    alert(this.id);
    this.sanphamService.findSanpham(this.id).subscribe((dt:Sanpham)=>{
      this.sanpham = dt;
      this.url = dt.image;
    })
    this.form = new FormGroup({
      name: new FormControl('',[Validators.required]),
      quantity:new FormControl('',[Validators.required]),
      price:new FormControl('',[Validators.required]),
      status:new FormControl('',[Validators.required]),
      image:new FormControl('',[Validators.required]),
      description:new FormControl('',[Validators.required]),
      id_danhmuc:new FormControl('',[Validators.required] )
    });
    this.danhmucService.getAllDanhmuc().subscribe((data:Danhmuc[])=>{
      this.danhmuc=data;
    })
  
  }

  get f(){
    return this.form.controls;
  }
  submit(){
    this.sanphamService.updateSanpham(this.id,this.form.value).subscribe((res:any)=>{})
    this.router.navigateByUrl('/sanpham/createsp');
  }




}
