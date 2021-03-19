import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BlogComponent } from './components/blog/blog.component';
import { IntroComponent } from './intro/intro.component';

const routes: Routes = [
  { path: '',component:IntroComponent },
  { path: 'landing',component:LandingPageComponent  },
  { path: 'professional',component:BlogComponent  },
  { path: 'home',component:BlogComponent  },
  { path: 'intro',component:IntroComponent },
  { path: '*',component:IntroComponent  },
  { path: '**',redirectTo:'intro' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
