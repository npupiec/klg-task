import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {InvoiceComponent} from "./invoice.component";

const routes: Routes = [
  {
    path: '',
    component: InvoiceComponent
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
})
export class InvoiceRoutingModule { }
