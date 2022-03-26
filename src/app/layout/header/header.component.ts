import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private auth:AuthService) { }

logout(){
  this.auth.logout().subscribe({
    next:()=>{
      localStorage.removeItem('token')
    }
  })

}

get isLoggedIn(){
  let token =this.auth.getToken()
  if(token){
    return true
  }
  return false
  
}


  ngOnInit(): void {
  }

}