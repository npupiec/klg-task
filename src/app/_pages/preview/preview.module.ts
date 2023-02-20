import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PreviewComponent} from "./preview.component";
import {PreviewRoutingModule} from "./preview-routing.module";
import {MatTableModule} from "@angular/material/table";
import {TableComponent} from "../../_components/table/table.component";

@NgModule({
  declarations: [PreviewComponent, TableComponent],
  imports: [
    CommonModule,
    PreviewRoutingModule,
    MatTableModule
  ]
})
export class PreviewModule { }
