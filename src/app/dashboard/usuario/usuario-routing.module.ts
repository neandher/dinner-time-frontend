import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UsuarioListaComponent} from './usuario-lista/usuario-lista.component';
import {UsuarioEditorComponent} from './usuario-editor/usuario-editor.component';
import {AuthGuard} from '../../core/services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: UsuarioListaComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
  },
  {
    path: 'novo',
    component: UsuarioEditorComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule {
}
