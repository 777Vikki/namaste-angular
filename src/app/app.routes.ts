import { Routes } from '@angular/router';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'employee-list' },
    { path: 'add-employee', component: EmployeeFormComponent },
    { path: 'add-employee/:id', component: EmployeeFormComponent },
    { path: 'employee-list', component: EmployeeListComponent },
];
