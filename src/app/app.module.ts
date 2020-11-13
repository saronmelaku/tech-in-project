import { CoursesComponent } from './courses/courses.component';
import { GradeComponent } from './grade/grade.component';
import { StudentComponent } from './student/student.component';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import {routing} from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
      NavComponent,
      HomeComponent,
      StudentComponent,
      GradeComponent,
      CoursesComponent


   ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
 bootstrap: [
     AppComponent

 ]
})
export class AppModule { }
