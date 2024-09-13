import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { bootstrapApplication } from '@angular/platform-browser';
//import { provideRouter, RouterOutlet } from '@angular/router';



export const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'employee', component: EmployeeComponent },
];
