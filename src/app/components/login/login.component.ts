import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLogin: boolean=false
  constructor( private auth:AuthService,private router:Router) { }

login(credentials:any){
  this.auth.login(credentials).subscribe({
    next:(res:any)=>{
localStorage.setItem('token',res.token) 
this.router.navigateByUrl('/home')
},
error:(httpError)=>{
  console.log(httpError)
  this.invalidLogin=true
}

  })
}





changeLogin(){
  this.invalidLogin=false
}

  ngOnInit(): void {
  }

}
