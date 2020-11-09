import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { LeitorComponent } from './leitor/leitor.component';

import { PagesRoutingModule } from './pages-routing.module';


@NgModule({
  declarations: [
    LeitorComponent
  ],
  imports: [
    SharedModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
