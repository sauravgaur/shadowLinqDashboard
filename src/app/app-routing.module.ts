import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component'
import {DashboardComponent} from './dashboard/dashboard.component'
import {HomeComponent} from './dashboard/home/home.component'
import {AuthGuard} from './services/auth.guard'
import {VenuesComponent} from './dashboard/venues/venues.component'

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
{ path: 'login', component: LoginComponent },
{ 
  path: 'dashboard', 
  component: DashboardComponent,
  canActivate:[AuthGuard],
  children:[{
    path:"home",
    component:HomeComponent
  },{
    path:"venues",
    component:VenuesComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
