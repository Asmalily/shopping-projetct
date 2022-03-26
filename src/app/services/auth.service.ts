import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { User } from "../interface/useinterface";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

url="http://localhost:3000/"
  user: User[]=[];

  constructor( private http:HttpClient) { }

  login(credentials:any){
    return this.http.post(this.url+'login',credentials)
  }

signUp(credentials:any){
  return this.http.post(this.url+'users',credentials)
}
getToken(){
return localStorage.getItem('token')
}


logout(){
 return this.http.delete(this.url+'logout')
}




}
