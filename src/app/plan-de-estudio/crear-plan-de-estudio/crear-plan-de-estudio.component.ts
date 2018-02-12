import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PlanDeEstudioService } from '../services/plan-de-estudio.service';


@Component({
  selector: 'app-crear-plan-de-estudio',
  templateUrl: './crear-plan-de-estudio.component.html',
  styleUrls: ['./crear-plan-de-estudio.component.css']
})
export class CrearPlanDeEstudioComponent implements OnInit {
  rForm: FormGroup;
  mensaje: String = '';
  planestudio: any;
  asignaturas: any[] = [];

  tiposJornada = ['Con JEC', 'Sin JEC'];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient,
    private planEstudioService: PlanDeEstudioService
  ) {
    this.rForm = fb.group({
      'nombre': [null, Validators.required],
      'tipo': [null, Validators.required],
      'horasLibreDisposicion': [null, Validators.required],
      'totalTiempoMinFG': [null, Validators.required],
      'totalTiempoMinFD': [null, Validators.required],
      'asignaturas': this.fb.array([this.initAsignatura()])
    })
  }

  ngOnInit() { }

  crearEvaluacion(planEstudio) {
    this.mensaje = 'Se ha añadido correctamente el plan de estudio <' + planEstudio.nombre + '>a la Base de Datos. Se le redireccionará a la pagina de inicio';

    this.planEstudioService.postPlanEstudio(planEstudio)
      .subscribe(res => {
        this.planestudio = res;
        setTimeout(() => {
          this.router.navigate(['/planestudios']);
        }, 3000)
      }, (err) => {
        console.log(err);
      });
  }

  initAsignatura() {
    return this.fb.group({
      nombre: [null, Validators.required],
      horasMensuales: [null, Validators.required],
      horasAnuales: [null, Validators.required]
    });
  }

  removeAsignatura(i: number) {
    const control = <FormArray>this.rForm.controls['asignaturas'];
    control.removeAt(i);
  }

  addAsignatura(): void {
    const control = <FormArray>this.rForm.controls['asignaturas'];
    control.push(this.initAsignatura());
  }
}
