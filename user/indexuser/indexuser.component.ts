import { UserService } from './../user.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { User } from '../user';
@Component({
  selector: 'app-indexuser',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './indexuser.component.html',
  styleUrl: './indexuser.component.css'
})
export class IndexuserComponent {
  form!:FormGroup
  user!:User;
  tk!:any;
  users: User[] = [];
  constructor(public userService:UserService,private router:Router){}
  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
    });
  }
  get f(){
    return this.form.controls;
  }
  submit(){
    this.userService.loginUser(this.form.value).subscribe((user:User)=>{
      if(user.position == 0){
        sessionStorage.setItem("user_session",JSON.stringify(user))
        this.router.navigateByUrl('/admin/index');
      }
      else if(user.position == 1){
        sessionStorage.setItem("user_session",JSON.stringify(user))
        this.router.navigateByUrl('/');
      }
      else{
        alert('Tên đăng nhập hoặc mật khẩu sai')
      }
      // const data = { donhang:"don hang cua khai"}
      // this.userService.goiemail(user.email.toString(),data).subscribe((res:any)=>{});
  });

    






// -------------------
    // login user token
    // this.userService.loginUser(this.form.value).subscribe((tk:any)=>{
    //   this.userService.tokenUser(tk).subscribe((res:any)=>{
    //   });
    // });
  };
}
    


