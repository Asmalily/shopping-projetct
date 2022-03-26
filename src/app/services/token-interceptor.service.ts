import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{
constructor(private auth:AuthService) { }

///to authenticate 
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    // let token=localStorage.getItem('token')
    let token = this.auth.getToken()
    let newReq=req.clone({
      setHeaders:{
        Authorization:`Bearer ${token}`
      }

    })
    return next.handle(newReq)
  }
}
