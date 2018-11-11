import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShowAuthedDirective} from './show-authed.directive';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {ListErrorsComponent} from './list-errors.component';

@NgModule({
  declarations: [ShowAuthedDirective, ListErrorsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    ListErrorsComponent,
    ShowAuthedDirective
  ]
})
export class SharedModule {
}
