import { DmspService } from './../dmsp.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-indexdmsp',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './indexdmsp.component.html',
  styleUrl: './indexdmsp.component.css'
})
export class IndexdmspComponent {
  dmsp: any[] = [];
  constructor( public dmspService: DmspService ,
    private router:Router,  route:ActivatedRoute){}

    ngOnInit(): void {
        this.dmspService.getDmSanpham().subscribe((data:any)=>{
        this.dmsp = data;
      })
    }
}
