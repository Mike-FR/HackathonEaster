import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortalComponent } from './portal/portal.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: "/home",
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'portal',
    component: PortalComponent,
  },
  { path: '**', 
  component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
