import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { EvaluacionService } from '../services/evaluacion.service';

@Component({
  selector: 'app-crear-evaluacion',
  templateUrl: './crear-evaluacion.component.html',
  styleUrls: ['./crear-evaluacion.component.css']
})
export class CrearEvaluacionComponent implements OnInit {
  rForm: FormGroup;
  mensaje: String = '';
  evaluacion: any;
  asignaturas: any;
  actividades: any;
  retroalimentacion: any;
  autor = '5a94266d681fc20b3c8e239b'; // Por el momento hasta implementar bien la autentificacion

  nivelesDeAprendizaje = ['Recordar', 'Comprender', 'Aplicar', 'Analizar', 'Evaluar', 'Crear'];
  tiposDeEjecucion = ['Al azar', 'Orden numeral', 'Mayor dificultad', 'Menor dificultad'];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient,
    private evaluacionService: EvaluacionService
  ) {
    this.rForm = fb.group({
      'profesorAutor': [this.autor,Validators.required],
      'titulo': [null, Validators.required],
      'nivelAprendizaje': [null, Validators.required],
      'tipoEjecucion': [null, Validators.required],
      'asignatura': [null, Validators.required],
      'detalles': [null, Validators.required],
      'retroalimentacion': [null, Validators.required],
      'actividades': this.fb.array([])
    })
  }

  ngOnInit() { 
    this.evaluacionService.getAsignaturas().subscribe( asignaturas => {
      this.asignaturas = asignaturas;
      console.log(this.asignaturas);
    })

    this.evaluacionService.getRetroalimentacion().subscribe( retroalimentacion => {
      this.retroalimentacion = retroalimentacion;
      console.log(this.retroalimentacion);
    })
  
    this.evaluacionService.getActividades().subscribe( actividades => {
      this.actividades = actividades['data'];
      console.log(actividades['data'])
    })
  }

  crearEvaluacion(evaluacion) {
    this.mensaje = 'Se ha añadido correctamente la evaluacion de a la Base de Datos. Se le redireccionará a la pagina de inicio';

    this.evaluacionService.postEvaluacion(evaluacion)
      .subscribe(res => {
        this.evaluacion = res;
        setTimeout(() => {
          this.router.navigate(['/evaluaciones']);
        }, 3000)
      }, (err) => {
        console.log(err);
      });
  }

  removeActividad(i: number) {
    const control = <FormArray>this.rForm.controls['actividades'];
    control.removeAt(i)
  }

  onAddActividad() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.rForm.get('actividades')).push(control);
  }
}
