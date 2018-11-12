import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsuarioListaComponent} from './usuario-lista/usuario-lista.component';
import {UsuarioEditorComponent} from './usuario-editor/usuario-editor.component';

const routes: Routes = [
  {
    path: '',
    component: UsuarioListaComponent
  },
  {
    path: 'novo',
    component: UsuarioEditorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
