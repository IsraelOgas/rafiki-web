import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { EvaluacionService } from '../services/evaluacion.service';

@Component({
  selector: 'app-modificar-evaluacion',
  templateUrl: './modificar-evaluacion.component.html',
  styleUrls: ['./modificar-evaluacion.component.css']
})
export class ModificarEvaluacionComponent implements OnInit {
  rForm: FormGroup;
  evaluacion: any;
  id: String;
  mensaje: String = '';
  arr = [];

  nivelesDeAprendizaje = ['Recordar', 'Comprender', 'Aplicar', 'Analizar', 'Evaluar', 'Crear'];
  tiposDeEjecucion = ['Al azar', 'Orden numeral', 'Mayor dificultad', 'Menor dificultad'];

  constructor(private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient,
    private evaluacionService: EvaluacionService) {
    this.route.params.subscribe(res => {
      this.id = res.id;
    })
    this.evaluacionService.getEvaluacion(this.id).subscribe(data => {
      this.evaluacion = data['data']
      // console.log(this.evaluacion['0'])
      Array.from(this.evaluacion[0])
      console.log(this.evaluacion)
    })

    this.rForm = this.fb.group({
      'profesorAutor': [this.evaluacion['0'].profesorAutor, Validators.required],
      // 'titulo': [this.evaluacion[0].titulo, Validators.required],
      // 'nivelAprendizaje': [this.evaluacion[0].nivelAprendizaje, Validators.required],
      // 'tipoEjecucion': [this.evaluacion[0].tipoEjecucion, Validators.required],
      // 'asignatura': [this.evaluacion[0].asignatura._id, Validators.required],
      // 'detalles': [this.evaluacion[0].detalles, Validators.required],
      // 'retroalimentacion': [this.evaluacion[0].retroalimentacion, Validators.required],
      // 'actividades': this.fb.array([this.evaluacion[0].actividades])

      // 'profesorAutor': ['hola',Validators.required],
      'titulo': [Validators.required],
      'nivelAprendizaje': [Validators.required],
      'tipoEjecucion': [Validators.required],
      'asignatura': [ Validators.required],
      'detalles': [Validators.required],
      'retroalimentacion': [Validators.required],
      'actividades': this.fb.array([])
    })
    console.log(this.rForm.value)
  }

  ngOnInit() {
    this.getEvaluacion();
  }

  getEvaluacion(): void {
    this.evaluacionService.getEvaluacion(this.id)
      .subscribe(res => {
        this.evaluacion = res

        // for (let index = 0; index < this.evaluacion.evaluacion.retroalimentacion.length; index++) {
        //   const control = new FormControl(this.evaluacion.evaluacion.retroalimentacion[index], Validators.required);
        //   (<FormArray>this.rForm.get('retroalimentacion')).push(control);
        // }
      })
  }

  updateEvaluacion(evaluacion) {
    this.mensaje = 'Se ha modificado correctamente la evaluacion a la Base de Datos. Se le redireccionará a la pagina de inicio';

    this.evaluacionService.updateOrganizacion(evaluacion, this.id)
      .subscribe(res => {
        this.evaluacion = res;
        setTimeout(() => {
          this.router.navigate(['/evaluaciones']);
        }, 3000)
      }, (err) => {
        console.log(err);
      }
      );
  }

  onAddRetro() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.rForm.get('retroalimentacion')).push(control);
  }

  removeRetroalimentacion(i: number) {
    const control = <FormArray>this.rForm.controls['retroalimentacion'];
    control.removeAt(i)
  }

}
