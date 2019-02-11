import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { CreateComponent } from './create/create.component';
import {WelcomeComponent} from './welcome/welcome.component';
import { from } from 'rxjs';

const routes: Routes = [
  { path: '', component: WelcomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'list', component: ListComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'create', component: CreateComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
