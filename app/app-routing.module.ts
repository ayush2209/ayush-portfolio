import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/Startup/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' } //to make it working un-comment router outlet in app-component.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
