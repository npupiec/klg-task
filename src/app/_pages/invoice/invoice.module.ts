import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InvoiceComponent} from "./invoice.component";
import {MatInputModule} from "@angular/material/input";
import {InvoiceRoutingModule} from "./invoice-routing.module";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MainModule} from "../../main/main.module";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {FormComponent} from "../../_components/form/form.component";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [InvoiceComponent, FormComponent],
  imports: [
    CommonModule,
    MatInputModule,
    InvoiceRoutingModule,
    MatCardModule,
    MatIconModule,
    MainModule,
    ReactiveFormsModule,
    MatButtonModule,
    RouterModule
  ]
})
export class InvoiceModule { }
