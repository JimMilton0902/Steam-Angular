import { UserService } from './../user.service';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User } from '../user';

@Component({
  selector: 'app-createuser',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './createuser.component.html',
  styleUrl: './createuser.component.css'
})
export class CreateuserComponent {
  form!:FormGroup
  dsuser : User[] = [];
  fullname!:string;
  email!:string;
  password!:string;
  phone!:string;
  address!:string;
  position!:number;
  constructor(public userService:UserService,private router:Router){}
  ngOnInit(): void {
    this.form = new FormGroup({
      fullname : new FormControl('',[Validators.required]),
      email : new FormControl('',[Validators.required]),
      password : new FormControl('',[Validators.required]),
      phone : new FormControl('',[Validators.required]),
      address : new FormControl('',[Validators.required]),
      
    });
    // this.userService.getAllUser().subscribe((data:User[])=>{
    //   this.dsuser = data;
    // });
  }
  get f(){
    return this.form.controls;
  }
  submit(){
    const data = {...this.form.value, position: 1 }
    this.userService.createUser(data).subscribe((res:any)=>{
        this.router.navigateByUrl('/user/dangnhap');
    })
  }
}
