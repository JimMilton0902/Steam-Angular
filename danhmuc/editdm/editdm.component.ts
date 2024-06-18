import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Danhmuc } from '../danhmuc';
import { DanhmucService } from '../danhmuc.service';
import { ActivatedRoute, Route, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editdm',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,RouterModule],
  templateUrl: './editdm.component.html',
  styleUrl: './editdm.component.css'
})
export class EditdmComponent {
  form!:FormGroup
  id!:string;
  danhmuc!:Danhmuc;
  constructor(public danhmucService:DanhmucService,
    private router:Router,
    private route:ActivatedRoute){}
  
    ngOnInit():void {
    this.id = this.route.snapshot.params['DmId'];
    this.danhmucService.findDanhmuc(this.id).subscribe((data:Danhmuc)=>{
      this.danhmuc = data;
    });
    this.form = new FormGroup({
      name: new FormControl('',[Validators.required])
    });
  }
  get f(){
    return this.form.controls;
  }
  submit(){
    this.danhmucService.updateDanhmuc(this.id,this.form.value).subscribe((res:any)=>{})
      this.router.navigateByUrl('/danhmuc/indexdm');
    }
  }
  
