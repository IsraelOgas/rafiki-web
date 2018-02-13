import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 

import { ListaPlanDeEstudioComponent } from './plan-de-estudio/lista-plan-de-estudio/lista-plan-de-estudio.component';
import { CrearPlanDeEstudioComponent } from './plan-de-estudio/crear-plan-de-estudio/crear-plan-de-estudio.component';
import { DetallesPlanDeEstudioComponent } from './plan-de-estudio/detalles-plan-de-estudio/detalles-plan-de-estudio.component';
import { ModificarPlanDeEstudioComponent } from './plan-de-estudio/modificar-plan-de-estudio/modificar-plan-de-estudio.component';

import { ListaEvaluacionesComponent } from './evaluacion/lista-evaluaciones/lista-evaluaciones.component';
import { CrearEvaluacionComponent } from './evaluacion/crear-evaluacion/crear-evaluacion.component';
import { DetallesEvaluacionComponent } from './evaluacion/detalles-evaluacion/detalles-evaluacion.component';
import { ModificarEvaluacionComponent } from './evaluacion/modificar-evaluacion/modificar-evaluacion.component';

const routes: Routes = [ 
  // Rutas organizaciones
  { 
    path: 'planestudios', 
    component: ListaPlanDeEstudioComponent 
  }, 
  { 
    path: 'planestudio/:id', 
    component: DetallesPlanDeEstudioComponent 
  }, 
  { 
    path: 'planestudios/crear', 
    component: CrearPlanDeEstudioComponent 
  }, 
  { 
    path: 'planestudio/:id/editar', 
    component: ModificarPlanDeEstudioComponent 
  }, 
  // Rutas evaluaciones
  { 
    path: 'evaluaciones', 
    component: ListaEvaluacionesComponent 
  }, 
  { 
    path: 'evaluacion/:id', 
    component: DetallesEvaluacionComponent 
  }, 
  { 
    path: 'evaluaciones/crear', 
    component: CrearEvaluacionComponent 
  }, 
  { 
    path: 'evaluacion/:id/editar', 
    component: ModificarEvaluacionComponent 
  }, 
]; 
 
@NgModule({ 
  imports: [ 
    RouterModule.forRoot(routes) 
  ], 
  exports: [RouterModule], 
  declarations: [] 
}) 
export class AppRoutingModule { } 