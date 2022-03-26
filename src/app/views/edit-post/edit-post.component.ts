import { PostService } from 'src/app/services/post.service';
import { Component, OnInit } from '@angular/core';
import { Posts } from 'src/app/interface/postInterface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
posts:Posts={}
  constructor(private PostService:PostService,private route:ActivatedRoute,private router:Router) { }
  id:string = this.route.snapshot.params['id']
  file:any

getSinglePost(){
  this.PostService.getSinglePost(this.id).subscribe({
    next:(res:any)=>{
      this.posts=res
    },
    error:(httpError)=>{
      console.log(httpError)
    }
  })
}
updatePost(post:any){
  this.PostService.updatePost(this.id,post).subscribe({
    next:(res:any)=>{
      // return localStorage.getItem('token')
      this.router.navigateByUrl('viewpost')

    }

  })
  
}

  ngOnInit(): void {
    this.getSinglePost()
  }

}
