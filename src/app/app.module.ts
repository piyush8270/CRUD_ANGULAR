import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { CreateComponent } from './create/create.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
//import { CourseComponent } from './course/course.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailComponent,
    CreateComponent,
    HomeComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
