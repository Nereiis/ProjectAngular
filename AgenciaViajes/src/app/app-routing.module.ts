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

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'escapadas', component: EscapadasComponent},
  { path: 'escapadas/:id', component: DetalleComponent},
  { path: 'cruceros', component: CrucerosComponent},
  { path: 'cruceros/:id', component: DetalleCComponent},
  { path: 'islas', component: IslasComponent},
  { path: 'islas/:id', component: DetalleIComponent},
  { path: 'spas', component: SpasComponent},
  { path: 'spas/:id', component: DetalleSComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
