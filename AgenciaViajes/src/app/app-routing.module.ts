import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EscapadasComponent } from './pages/escapadas/escapadas.component';
import { IslasComponent } from './pages/islas/islas.component';
import { CrucerosComponent } from './pages/cruceros/cruceros.component';
import { SpasComponent } from './pages/spas/spas.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'escapadas', component: EscapadasComponent},
  { path: 'cruceros', component: CrucerosComponent},
  { path: 'islas', component: IslasComponent},
  { path: 'spas', component: SpasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
