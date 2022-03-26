import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  invalidEmail:boolean=false
  invalidAge:boolean=false
  invalidPassword:boolean=false
  msg:string=''
  httpError: any;
  constructor(private auth:AuthService,private router:Router) { }


   signUp(credentials:any){
     this.auth.signUp(credentials).subscribe({
       next:(res:any)=>{
         console.log(res)
localStorage.setItem('token',res.token)
this.router.navigateByUrl('profile')
       },
       error:(httpError)=>{
         console.log(httpError)
         if(httpError.error.code){
           this.invalidEmail=true
         }
    else if(httpError.error.errors.age){
      this.invalidAge=true
    }
    else if(httpError.error.errors.password){
      this.invalidPassword = true

    }
  }
     })
   }


   changeEmail(): void{
    this.invalidEmail=false
  }
  changeAge(){
    this.invalidAge = false
  }
  changePassword(){
    this.invalidPassword = false
  }

  ngOnInit(): void {
  }

}
