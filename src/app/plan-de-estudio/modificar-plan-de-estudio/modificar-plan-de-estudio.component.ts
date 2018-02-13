import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PlanDeEstudioService } from '../services/plan-de-estudio.service';

@Component({
  selector: 'app-modificar-plan-de-estudio',
  templateUrl: './modificar-plan-de-estudio.component.html',
  styleUrls: ['./modificar-plan-de-estudio.component.css']
})
export class ModificarPlanDeEstudioComponent implements OnInit {

  rForm: FormGroup;
  mensaje: String = '';
  planestudio: any;
  id: String = '';
  asignaturas: any[] = [];

  tiposJornada = ['Con JEC', 'Sin JEC'];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient,
    private planEstudioService: PlanDeEstudioService
  ) {
    this.route.params.subscribe(res => {
      this.id = res.id;
    })
    this.rForm = fb.group({
      'nombre': [Validators.required],
      'tipo': [Validators.required],
      'horasLibreDisposicion': [Validators.required],
      'totalTiempoMinFG': [Validators.required],
      'totalTiempoMinFD': [Validators.required],
      'asignaturas': this.fb.array([this.initAsignatura()])
    })
  }

  ngOnInit() {
    this.getPlanEstudio();
  }

  getPlanEstudio(): void {
    this.planEstudioService.getPlanEstudio(this.id)
      .subscribe(res => {
        this.planestudio = res
        console.log(res)
      })
  }

  updatePlanEstudio(planestudio) {
    this.planEstudioService.updatePlanEstudio(planestudio, this.id)
      .subscribe(res => {
        this.planestudio = res;
        this.mensaje = 'Se ha modificado correctamente el plan de estudios a la Base de Datos. Se le redireccionará a la pagina de inicio';
        setTimeout(() => {
          this.router.navigate(['/planestudios']);
        }, 3000)
      }, (err) => {
        console.log(err);
      }
      );
  }


  initAsignatura() {
    return this.fb.group({
      nombre: [Validators.required],
      horasMensuales: [Validators.required],
      horasAnuales: [Validators.required]
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
