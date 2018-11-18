import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReservaListaComponent} from './reserva-lista/reserva-lista.component';
import {AuthGuard} from '../../core/services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: ReservaListaComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservaRoutingModule { }
