import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {


url="http://localhost:3000/"
  constructor(private http:HttpClient) { }

  ///home api
  addPost(post:any){
return this.http.post(this.url+'alltasks',post)
  }

  getPost(){
    return this.http.get(this.url+'alltasks')

  }

  ///get id of post itself
  getSinglePost(id:any){
    return this.http.get(this.url+'tasks/'+id)

  }

  ///post here is to take updated data
  updatePost(id:any,post:any){
    return this.http.patch(this.url+'tasks/'+id,post)
  }


  ///postimage
addPostImage(postimage:any){
  return this.http.post(this.url +'alltasks/image',postimage)
}
}

