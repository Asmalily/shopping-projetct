import { FashionComponent } from './views/fashion/fashion.component';
import { EditPostComponent } from './views/edit-post/edit-post.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './views/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth-guard';
import { TestimgComponent } from './views/testimg/testimg.component';
import { AboutComponent } from './views/about/about.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'',component:LoginComponent},
  {path:'profile',component:ProfileComponent,canActivate:[AuthGuard]},
  {path:'signup',component:SignupComponent},
  {path:'settings',component:SettingsComponent,canActivate:[AuthGuard]},
  {path:'editpost/:id',component:EditPostComponent,canActivate:[AuthGuard]},
  {path:'testimg',component:TestimgComponent},
  {path:'fashion',component:FashionComponent},
  {path:'about',component:AboutComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]

})
export class AppRoutingModule { }
