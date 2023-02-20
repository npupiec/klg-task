import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { PreviewComponent } from "./preview.component";

const routes: Routes = [
  {
    path: '',
    component: PreviewComponent
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
})
export class PreviewRoutingModule { }
