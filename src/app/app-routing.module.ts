import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BlogComponent } from './components/blog/blog.component';

const routes: Routes = [
  {path: '',component:LandingPageComponent},
  {path: 'landing',component:LandingPageComponent},
  {path: 'professional',component:BlogComponent},
  {path: 'home',component:BlogComponent},
  {path: '*',component:LandingPageComponent},
  {path: '**',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
