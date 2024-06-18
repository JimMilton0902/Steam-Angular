import { Component } from '@angular/core';
import { Sanpham } from '../sanpham';
import { SanphamService } from '../sanpham.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-viewsp',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './viewsp.component.html',
  styleUrl: './viewsp.component.css'
})
export class ViewspComponent {
  id!:string;
  sanpham!:Sanpham;

  constructor(public sanphamService:SanphamService, 
    private route:ActivatedRoute){}
  ngOnInit(): void {
  
    this.id = this.route.snapshot.params['SpId'];
    this.sanphamService.findSanpham(this.id).subscribe((data:Sanpham)=>{
      this.sanpham = data;
    })

    
  }
}
