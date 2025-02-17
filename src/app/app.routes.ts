import { Routes } from '@angular/router';
import { AlumnosComponent } from './pages/alumnos/alumnos.component';

export const routes: Routes = [
    {path: 'alumnos', component: AlumnosComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
];
