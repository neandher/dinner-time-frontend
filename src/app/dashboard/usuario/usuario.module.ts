import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioListaComponent } from './usuario-lista/usuario-lista.component';
import { UsuarioEditorComponent } from './usuario-editor/usuario-editor.component';

@NgModule({
  declarations: [UsuarioListaComponent, UsuarioEditorComponent],
  imports: [
    CommonModule,
    UsuarioRoutingModule
  ]
})
export class UsuarioModule { }
