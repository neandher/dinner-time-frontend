import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from '../dashboard.component';
import {ReservaListaComponent} from './reserva-lista/reserva-lista.component';

const routes: Routes = [
  {
    path: '',
    component: ReservaListaComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservaRoutingModule { }
