import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-viewuser',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './viewuser.component.html',
  styleUrl: './viewuser.component.css'
})
export class ViewuserComponent {

  // dsuser: User[] = [];
  // constructor(public userService:UserService,private router:Router){}
  // ngOnInit(): void {
  //   this.userService.getAllUser().subscribe((data:User[])=>{
  //     this.dsuser = data;
  //   });
  // }
  dsuser: User[] = [];
  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllUser().subscribe(
      (data: User[]) => { this.dsuser = data; } //doc cai mang va truyen lai tren mang danhmuc[]
    )
  }
}
