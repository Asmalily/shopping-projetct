import { Component, OnInit } from '@angular/core';
import { Posts } from 'src/app/interface/postInterface';
import { PostService } from 'src/app/services/post.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-fashion',
  templateUrl: './fashion.component.html',
  styleUrls: ['./fashion.component.css']
})
export class FashionComponent implements OnInit {
  posts:Posts[]=[]


  
  constructor(private postService:PostService,
    private sanitizer:DomSanitizer) { }
  
  getPost(){
    this.postService.getPost().subscribe({
      next:(res:any)=>{
        this.posts =res        
        console.log(this.posts)

      },
      error:(httpError)=>{
console.log(httpError)
      }
    })
    


  }


  ngOnInit(): void {
    this.getPost()
    
  }


}

