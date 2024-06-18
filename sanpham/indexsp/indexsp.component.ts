import { SanphamService } from './../sanpham.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Sanpham } from '../sanpham';

@Component({
  selector: 'app-indexsp',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './indexsp.component.html',
  styleUrl: './indexsp.component.css'
})
export class IndexspComponent {
  dmsp: any[] = [];
  constructor(
    public sanphamService:SanphamService ,
    private router:Router, 
    route:ActivatedRoute){}
    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      this.sanphamService.getDmSanpham().subscribe((data:any)=>{
        this.dmsp = data;
      })
    }
}
