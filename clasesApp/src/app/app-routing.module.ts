import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { PageNotFoundComponent } from './components/seccions/page-not-found/page-not-found.component';
import { HomeComponent } from './components/seccions/home/home.component';
import { AboutComponent } from './components/seccions/about/about.component';
import { LoginComponent } from './components/auth/login/login.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'detalle', component: DetalleComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
{ path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
