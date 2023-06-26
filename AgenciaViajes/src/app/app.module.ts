import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { EscapadasComponent } from './pages/escapadas/escapadas.component';
import { CrucerosComponent } from './pages/cruceros/cruceros.component';
import { SpasComponent } from './pages/spas/spas.component';
import { IslasComponent } from './pages/islas/islas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    EscapadasComponent,
    CrucerosComponent,
    SpasComponent,
    IslasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
