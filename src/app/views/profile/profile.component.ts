import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interface/useinterface';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private userService:UsersService,private authService:AuthService) { }
 
  user:User= {} ///get data from interface


 
getProfile(){
  this.userService.getProfile().subscribe({
    next:(res:any)=>{
console.log(res)
this.user=res
    },
    error:(httpError: any)=>{
      console.log(httpError)
    }
  }
  )}

  ngOnInit(): void {
   this.getProfile()
  }

  get isAutherized(){
    let token =this.authService.getToken()
    if(token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjNjYjg4NzdlMGIxNzBiMzE5OTJkOTEiLCJpYXQiOjE2NDgxNDY1OTB9.0vWaSl_WS3RdFUmi_yj90XZ4ZBcxrPmxIISq2H4kHkk"){
      return true

    }
  
    return false
    
  }
///to hide stuff for admn
  hasRole(user: User) {
  if (this.isAutherized && this.user.roles === 'admin'){
    return true

  }
    return false
}

}