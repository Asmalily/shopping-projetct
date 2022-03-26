import { Router } from '@angular/router';
import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interface/useinterface';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

user:User={}
  file: any;
  constructor(private UsersService:UsersService, private router:Router) { }
  getProfile(){
    this.UsersService.getProfile().subscribe({
      next:(res:any)=>{
        this.user=res
      }
    })
  }
  
  edit(data:any){
    this.UsersService.edit(data).subscribe({
      next:(res:any)=>{
        this.addImage()

        this.router.navigateByUrl('profile')
      }
    })
  }

  ///avatar

  handelUpload(event:any){
    console.log(event.target.files)
    this.file = event.target.files
  }

  addImage(){
    if(this.file){
      const myData=new FormData()
      myData.append('avatar',this.file[0])
  this.UsersService.addImage(myData).subscribe(()=>{})
  }
  }
  ngOnInit(): void {
    this.getProfile()
  }
}



