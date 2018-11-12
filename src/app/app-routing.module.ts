import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'dashboard/reserva',
    loadChildren: './dashboard/reserva/reserva.module#ReservaModule'
  },
  {
    path: 'dashboard/usuario',
    loadChildren: './dashboard/usuario/usuario.module#UsuarioModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
