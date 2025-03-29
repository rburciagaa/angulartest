import { Component } from '@angular/core';
import { Alumno } from '../../../../models/alumno.model';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { GlobalAlumnosService } from '../../../../services/global-alumnos.service';
import Swal from "sweetalert2"

@Component({
  selector: 'app-alumno-index',
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './alumno-index.component.html',
  styleUrl: './alumno-index.component.css'
})
export class AlumnoIndexComponent {
  globalAlumnos:Alumno[]= [];
  constructor(private globalAlumnosService: GlobalAlumnosService){
    this.globalAlumnos = this.globalAlumnosService.obtenerAlumnos();
  }

  eliminarAlumno(id: number){
    Swal.fire({
      title:"Eliminar registro?",
      showCancelButton:true,
      confirmButtonText:"Eliminar"
    }).then(result=>{
      if (result.isConfirmed){
        this.globalAlumnos = this.globalAlumnos.filter(alumno => alumno.id !== id);
      }
    })
  }
}
