import { Injectable } from '@angular/core';
import { Alumno } from '../models/alumno.model';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GlobalAlumnosService {
  globalAlumnos: Alumno[] = [];
  constructor() {
    this.globalAlumnos.push({ id: 1, nombre: 'Alumno 1', apellidos: 'Apellido 1', matricula: '123456', email: 'alumno1@email.com', telefono: '123', activo: true });
    this.globalAlumnos.push({ id: 2, nombre: 'Alumno 2', apellidos: 'Apellido 2', matricula: '654321', email: 'alumno2@email.com', telefono: '456', activo: true });
    this.globalAlumnos.push({ id: 3, nombre: 'Alumno 3', apellidos: 'Apellido 3', matricula: '456123', email: 'alumno3@email.com', telefono: '789', activo: true });
  }

  obtenerAlumnos() {
    return this.globalAlumnos;
  }

  obtenerAlumnoById(id:number): Observable<Alumno | undefined> {
    const alumno = this.globalAlumnos.find(a=>a.id==id)
    return of(alumno)
  }
}
