import { Component, OnInit } from '@angular/core';
import { GruposService } from '../../services/grupos.service';

@Component({
  selector: 'app-alumnos',
  imports: [],
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.css'
})
export class AlumnosComponent {
  grupoSeleccionado='';
  FechaSeleccionada='';

  constructor(private gruposService: GruposService) {
    this.grupoSeleccionado = this.gruposService.getSelectedGrupo();
    this.FechaSeleccionada = this.gruposService.getFechaMostrada();
    this.gruposService.selectedGrupo$.subscribe(value => {
      this.grupoSeleccionado = value;
    });
    this.gruposService.fechaMostrada$.subscribe(value => {
      this.FechaSeleccionada = value;
    });
  }
}
