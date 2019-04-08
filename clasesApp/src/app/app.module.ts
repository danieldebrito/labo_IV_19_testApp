import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// styles //
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// layout //
import { NavComponent } from './components/layout/nav/nav.component';
import { BodyComponent } from './components/layout/body/body.component';
import { FootComponent } from './components/layout/foot/foot.component';
// seccions //
import { LoginComponent } from './components/auth/login/login.component';
import { PageNotFoundComponent } from './components/seccions/page-not-found/page-not-found.component';
import { HomeComponent } from './components/seccions/home/home.component';
import { AboutComponent } from './components/seccions/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BodyComponent,
    FootComponent,
    LoginComponent,
    PageNotFoundComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
