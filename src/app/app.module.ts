import { TokenInterceptorService } from './services/token-interceptor.service';
import { UsersService } from './services/users.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './views/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { ProfileComponent } from './views/profile/profile.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AuthService } from './services/auth.service';
import { HttpClientModule,HTTP_INTERCEPTORS } from "@angular/common/http";
import { SignupComponent } from './components/signup/signup.component';
import { PostService } from './services/post.service';
import { SettingsComponent } from './components/settings/settings.component';
import { EditPostComponent } from './views/edit-post/edit-post.component';
import { AuthGuard } from './services/auth-guard';
import { FooterComponent } from './layout/footer/footer.component';
import { FashionComponent } from './views/fashion/fashion.component';
import { NonsanitizePipe } from './nonsanitize.pipe';
import { TestimgComponent } from './views/testimg/testimg.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { AboutComponent } from './views/about/about.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    HeaderComponent,
    SignupComponent,
    SettingsComponent,
    EditPostComponent,
    FooterComponent,
    FashionComponent,
    NonsanitizePipe,
    TestimgComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
  ],
  providers: [AuthService,PostService,AuthGuard,
    UsersService,{
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
