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
import { HttpClientModule } from '@angular/common/http';
import { DetalleComponent } from './pages/escapadas/detalle/detalle.component';
import { DetalleCComponent } from './pages/cruceros/detalle-c/detalle-c.component';
import { DetalleIComponent } from './pages/islas/detalle-i/detalle-i.component';
import { DetalleSComponent } from './pages/spas/detalle-s/detalle-s.component';
import { FormsCComponent } from './pages/cruceros/forms-c/forms-c.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsEComponent } from './pages/escapadas/forms-e/forms-e.component';
import { FormsIComponent } from './pages/islas/forms-i/forms-i.component';
import { FormsSComponent } from './pages/spas/forms-s/forms-s.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    EscapadasComponent,
    CrucerosComponent,
    SpasComponent,
    IslasComponent,
    DetalleComponent,
    DetalleCComponent,
    DetalleIComponent,
    DetalleSComponent,
    FormsCComponent,
    FormsEComponent,
    FormsIComponent,
    FormsSComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
