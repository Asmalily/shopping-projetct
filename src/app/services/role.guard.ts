import { AuthService } from 'src/app/services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { User } from '../interface/useinterface';



@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  user:User[]=[]
  constructor(private authService:AuthService){}

  get isAutherized(){
    let token =this.authService.getToken()
    if(token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjM3Yjg5ZjJhNDJmMGJiY2ZlY2ZkNWMiLCJpYXQiOjE2NDc4MTg5MTF9.gd5OO94ZPhaiQyVm0dr61iCG5nBVYQszmqIZU8fvw3E"){
      return true
    }
    return false
    
  }

     
  canActivate():any{
let role =localStorage.getItem('roles')
console.log(role)


  }


}