import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url="http://localhost:3000/"

  constructor(private http:HttpClient) { }

getProfile(){
return this.http.get(this.url+'profile')
}

edit(data:any){
  return this.http.patch(this.url+'profile',data)
}

addImage(image:any){
  return this.http.post(this.url+'profile/avatar',image)
}


}
