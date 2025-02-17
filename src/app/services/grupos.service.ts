import { Injectable } from '@angular/core';
import { Grupo } from '../models/grupo.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GruposService {
  private grupos: Grupo[] = [];
  
  private fechaMostrada=new BehaviorSubject<string>(this.obtenerFechaActual());
  fechaMostrada$ = this.fechaMostrada.asObservable();

  // 🔹 Inicializa con el nombre del primer grupo o vacío si no hay grupos
  private selectedGrupo = new BehaviorSubject<string>('');
  selectedGrupo$ = this.selectedGrupo.asObservable();



  constructor() {
    //TODO: Cargar los grupos desde la base de datos
    this.grupos.push({ id: 1, nombre: 'Grupo 1', descripcion: 'Descripción del grupo 1' });
    this.grupos.push({ id: 2, nombre: 'Grupo 2', descripcion: 'Descripción del grupo 2' });
    this.grupos.push({ id: 3, nombre: 'Grupo 3', descripcion: 'Descripción del grupo 3' });

    // 🔥 Si hay grupos, establece el primero como seleccionado
    if (this.grupos.length > 0) {
      this.selectedGrupo.next(this.grupos[0].nombre);
    }
  }

  obtenerFechaActual(): string {
    const hoy = new Date();
    const año = hoy.getFullYear();
    const mes = String(hoy.getMonth() + 1).padStart(2, '0'); // 🔹 `getMonth()` empieza en 0
    const dia = String(hoy.getDate()).padStart(2, '0');
  
    return `${año}-${mes}-${dia}`;
  }

  getFechaMostrada() {
    return this.fechaMostrada.getValue();
  }

  updateFechaMostrada(fecha: string) {
    this.fechaMostrada.next(fecha);
  }

  updateValue(value: string) {
    this.selectedGrupo.next(value);
  }

  getSelectedGrupo() {
    return this.selectedGrupo.getValue();
  }

  public getGrupos() {
    return this.grupos;
  }
}
