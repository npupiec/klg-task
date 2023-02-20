import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./main.component";
import {InvoiceComponent} from "../_pages/invoice/invoice.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'invoice',
        loadChildren: () => import('../_pages/invoice/invoice.module').then(m => m.InvoiceModule)
      },
      {
        path: 'invoice-preview',
        loadChildren: () => import('../_pages/preview/preview.module').then(m => m.PreviewModule)
      },
      {
        path: '**',
        redirectTo: '/invoice',
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'invoice'
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
})
export class MainRoutingModule { }
