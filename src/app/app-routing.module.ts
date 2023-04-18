import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ROUTES} from "./app.routes";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
