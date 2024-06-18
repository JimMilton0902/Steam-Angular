import { Component } from '@angular/core';
import { Danhmuc } from '../danhmuc';
import { DanhmucService } from '../danhmuc.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-indexdm',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './indexdm.component.html',
  styleUrl: './indexdm.component.css'
})
// llấy danh mục
export class IndexdmComponent {
  danhmuc:Danhmuc[]=[];
  constructor(public danhmucService:DanhmucService){}
  ngOnInit(): void{
    this.danhmucService.getAllDanhmuc().subscribe(
      (data:Danhmuc[])=>{this.danhmuc=data;}
    )
  }
  deleteDanhmuc(id:string){
    this.danhmucService.deleteDanhmuc(id).subscribe(res=>{
      this.danhmuc = this.danhmuc.filter(item=>item._id !==id)
    })
  }
  
}
