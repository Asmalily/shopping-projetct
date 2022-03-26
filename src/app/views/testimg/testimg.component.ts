import { Any } from './../../../../node_modules/@grpc/grpc-js/src/generated/google/protobuf/Any';
import { DomSanitizer } from '@angular/platform-browser';
import { PostService } from 'src/app/services/post.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Posts } from 'src/app/interface/postInterface';
@Component({
  selector: 'app-testimg',
  templateUrl: './testimg.component.html',
  styleUrls: ['./testimg.component.css']
})
export class TestimgComponent implements OnInit {

  posts:Posts[]=[]
  file:any

  constructor(private postsService:PostService, private router:Router,private sanitize:DomSanitizer) { }


 
 addPost(post:any){
 this.postsService.addPost(post).subscribe({
   next:()=>{
    this.addPostImage()

     this.router.navigateByUrl('fashion')

   }
 })

 }


 ///input
 handleFiles(event:any){
   this.file = event.target.files[0];
   console.log(this.file)

 }

 addPostImage(){
  if(this.file){
    const data=new FormData()
    data.append('postimage',this.file[0])
this.postsService.addPostImage(data).subscribe(()=>{})
}
 }
  ngOnInit(): void {
  }

 }
