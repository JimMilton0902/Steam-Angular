import { SanphamService } from './../sanpham.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { DanhmucService } from '../../danhmuc/danhmuc.service';
import { Danhmuc } from '../../danhmuc/danhmuc';
import { Sanpham } from '../sanpham';

@Component({
  selector: 'app-createsp',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,RouterModule],
  templateUrl: './createsp.component.html',
  styleUrl: './createsp.component.css'
})
export class CreatespComponent {
  form!:FormGroup;
  id!: string;
  danhmuc:Danhmuc[] = [];
  sanpham:Sanpham[] =[];

  constructor(
    public danhmucService:DanhmucService,
    public sanphamService:SanphamService ,
    private router:Router, 
    route:ActivatedRoute){}

    ngOnInit(): void {
      this.form = new FormGroup({
        id_danhmuc:new FormControl('',[Validators.required] ),
        name:new FormControl('',[Validators.required] ),
        quantity:new FormControl('',[Validators.required] ),
        price:new FormControl('',[Validators.required] ),
        status: new FormControl('',[Validators.required] ),
        image:new FormControl('',[Validators.required] ),
        description: new FormControl('',[Validators.required] ),
    });
      this.danhmucService.getAllDanhmuc().subscribe((data:Danhmuc[])=>{
        this.danhmuc=data;
      })

        //doc het san sp
    this.sanphamService.getAllSanpham().subscribe((data:Sanpham[])=>{
      this.sanpham = data;
    })
    }
    get f(){
      return this.form.controls;
    }
    submit(){

      console.log(this.form.value);
      this.sanphamService.createSanpham(this.form.value).subscribe((res:any)=>{
        // this.router.navigateByUrl('/danhmuc/indexdm');
        window.location.reload();
      })
    }
    deleteSanpham(id:string){
      this.sanphamService.deleteSanpham(id).subscribe(res=>{
        this.sanpham = this.sanpham.filter(item=>item._id !== id);
      });
      window.location.reload;
    }
}


