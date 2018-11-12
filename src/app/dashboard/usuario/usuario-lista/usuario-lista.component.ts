import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-usuario-lista',
  templateUrl: './usuario-lista.component.html',
})
export class UsuarioListaComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  novoUsuario() {
    this.router.navigateByUrl('dashboard/usuario/novo');
  }
}
