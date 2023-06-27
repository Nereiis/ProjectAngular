import { DetalleCComponent } from './pages/cruceros/detalle-c/detalle-c.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EscapadasComponent } from './pages/escapadas/escapadas.component';
import { IslasComponent } from './pages/islas/islas.component';
import { CrucerosComponent } from './pages/cruceros/cruceros.component';
import { SpasComponent } from './pages/spas/spas.component';
import { DetalleComponent } from './pages/escapadas/detalle/detalle.component';
import { DetalleIComponent } from './pages/islas/detalle-i/detalle-i.component';
import { DetalleSComponent } from './pages/spas/detalle-s/detalle-s.component';
import { FormsCComponent } from './pages/cruceros/forms-c/forms-c.component';
import { FormsEComponent } from './pages/escapadas/forms-e/forms-e.component';
import { FormsSComponent } from './pages/spas/forms-s/forms-s.component';
import { FormsIComponent } from './pages/islas/forms-i/forms-i.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'escapadas', component: EscapadasComponent},
  { path: 'escapadas/:id', component: DetalleComponent},
  { path: 'editEscapada', component: FormsEComponent, canActivate:[authGuard]},
  { path: 'addEscapada', component: FormsEComponent, canActivate:[authGuard]},

  { path: 'cruceros', component: CrucerosComponent},
  { path: 'cruceros/:id', component: DetalleCComponent},
  { path: 'editCrucero', component: FormsCComponent, canActivate:[authGuard]},
  { path: 'addCrucero', component: FormsCComponent, canActivate:[authGuard]},

  { path: 'islas', component: IslasComponent},
  { path: 'islas/:id', component: DetalleIComponent},
  { path: 'editIsla', component: FormsIComponent, canActivate:[authGuard]},
  { path: 'addIsla', component: FormsIComponent, canActivate:[authGuard]},

  { path: 'spas', component: SpasComponent},
  { path: 'spas/:id', component: DetalleSComponent},
  { path: 'editSpa', component: FormsSComponent, canActivate:[authGuard]},
  { path: 'addSpa', component: FormsSComponent, canActivate:[authGuard]},

  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
