import { CoursesComponent } from './courses/courses.component';
import { StudentComponent } from './student/student.component';
import { HomeComponent } from './home/home.component';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GradeComponent } from './grade/grade.component';

export const routing = RouterModule.forRoot([
    {
        path: 'home',
        component: HomeComponent,
        children: [
            {
                path: 'student',
                component: StudentComponent,
                outlet: 'studentMain'
            },
        {
            path: 'grade',
            component: GradeComponent,
            outlet: 'studentMain'
        },
        {
            path: 'courses',
            component: CoursesComponent,
            outlet: 'studentMain'
        }]
    },
{ path: '**', redirectTo: 'home', pathMatch: 'full'}
]);

