import { Routes } from '@angular/router';
import { AlumnoIndexComponent } from './pages/alumnos/index/alumno-index/alumno-index.component';
import { AlumnoCreateComponent } from './pages/alumnos/create/alumno-create/alumno-create.component';

export const routes: Routes = [
    {path: 'globalalumnos', component: AlumnoIndexComponent},
    {path: 'globalalumnos/create', component: AlumnoCreateComponent},
    {path: 'globalalumnos/create/:id', component: AlumnoCreateComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
];
