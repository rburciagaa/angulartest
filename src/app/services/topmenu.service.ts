import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Grupo } from '../models/grupo.model';

@Injectable({
  providedIn: 'root'
})
export class TopmenuService {
  selectedGrupo=new BehaviorSubject<string>(this.obtenerGrupoActual());
  selectedGrupo$ = this.selectedGrupo.asObservable();
  grupos:Grupo[]=[];

  selectedFecha=new BehaviorSubject<string>(this.obtenerFechaActual());
  selectedFecha$ = this.selectedFecha.asObservable();
  
  constructor() { 
    //TODO: Cargar los grupos desde la base de datos
    this.grupos.push({ id: 1, nombre: 'Grupo 1', descripcion: 'Descripción del grupo 1' });
    this.grupos.push({ id: 2, nombre: 'Grupo 2', descripcion: 'Descripción del grupo 2' });
    this.grupos.push({ id: 3, nombre: 'Grupo 3', descripcion: 'Descripción del grupo 3' });
    if (this.grupos.length > 0) {
      this.selectedGrupo.next(this.grupos[0].nombre);
    }
  }

  obtenerGrupos(): Grupo[] {
    return this.grupos;
  }


  obtenerFechaActual(): string {
    const hoy = new Date();
    const año = hoy.getFullYear();
    const mes = String(hoy.getMonth() + 1).padStart(2, '0'); // 🔹 `getMonth()` empieza en 0
    const dia = String(hoy.getDate()).padStart(2, '0');
    return `${año}-${mes}-${dia}`;
  }


  obtenerGrupoActual(): string {
    return this.selectedGrupo.getValue();
  }

  updateGrupo(value: string) {
    this.selectedGrupo.next(value);
  }
}
