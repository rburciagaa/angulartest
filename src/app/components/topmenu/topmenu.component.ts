import { Component } from '@angular/core';
import { Grupo } from '../../models/grupo.model';
import { GruposService } from '../../services/grupos.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-topmenu',
  imports: [NgFor],
  templateUrl: './topmenu.component.html',
  styleUrl: './topmenu.component.css'
})

export class TopmenuComponent {
  grupos: Grupo[];
  constructor(private gruposService: GruposService) {
    this.grupos = this.gruposService.getGrupos();
  }

  obtenerFecha(): string {
    const hoy = new Date();
    const año = hoy.getFullYear();
    const mes = String(hoy.getMonth() + 1).padStart(2, '0'); // 🔹 `getMonth()` empieza en 0
    const dia = String(hoy.getDate()).padStart(2, '0');
  
    return `${año}-${mes}-${dia}`;
  }
  
  onFechaChange(event:Event) {
    const value = (event.target as HTMLInputElement).value;
    this.gruposService.updateFechaMostrada(value);
  }

  onSelectChange(event:Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.gruposService.updateValue(value);
  }
}
