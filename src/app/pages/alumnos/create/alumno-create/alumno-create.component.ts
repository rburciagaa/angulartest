import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { GlobalAlumnosService } from '../../../../services/global-alumnos.service';
import { Alumno } from '../../../../models/alumno.model';

@Component({
  selector: 'app-alumno-create',
  imports: [ReactiveFormsModule],
  templateUrl: './alumno-create.component.html',
  styleUrl: './alumno-create.component.css'
})
export class AlumnoCreateComponent implements OnInit {
  form:any;
  alumno:Alumno|undefined;
  id:number|null=null;
  constructor(
    private activatedRoute: ActivatedRoute, 
    private router:Router, 
    private fb: FormBuilder,
    private globalAlumnosService:GlobalAlumnosService
  ){}

  cargarAlumno(id:number){
    this.globalAlumnosService.obtenerAlumnoById(id).subscribe(alumno=>{
      if(alumno){
        this.form.patchValue(alumno)
      }
    });
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      nombre: '',
      apellidos: '',
      matricula: '',
      email: '',
      telefono: '',
      activo: true
    });



    this.activatedRoute.paramMap.subscribe(params=>{
      const id=params.get("id")
      if(id){
        this.id=+id
        this.cargarAlumno(this.id)
      }
    })
    

  }

  crearAlumno(){
    console.log(this.form.value);
  }

  cancelar(){
    this.router.navigate(['/globalalumnos']);    
  }
}
