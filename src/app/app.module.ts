import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
 
//Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
//Forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 
//Servicios

import { EvaluacionService } from './evaluacion/services/evaluacion.service';
import { PlanDeEstudioService } from './plan-de-estudio/services/plan-de-estudio.service';
 
import { AppComponent } from './app.component';

import { AppRoutingModule } from './/app-routing.module';
import { ListaEvaluacionesComponent } from './evaluacion/lista-evaluaciones/lista-evaluaciones.component';
import { CrearEvaluacionComponent } from './evaluacion/crear-evaluacion/crear-evaluacion.component';
import { DetallesEvaluacionComponent } from './evaluacion/detalles-evaluacion/detalles-evaluacion.component';
import { ModificarEvaluacionComponent } from './evaluacion/modificar-evaluacion/modificar-evaluacion.component';
import { CrearPlanDeEstudioComponent } from './plan-de-estudio/crear-plan-de-estudio/crear-plan-de-estudio.component';
import { ListaPlanDeEstudioComponent } from './plan-de-estudio/lista-plan-de-estudio/lista-plan-de-estudio.component';
import { DetallesPlanDeEstudioComponent } from './plan-de-estudio/detalles-plan-de-estudio/detalles-plan-de-estudio.component';
import { ModificarPlanDeEstudioComponent } from './plan-de-estudio/modificar-plan-de-estudio/modificar-plan-de-estudio.component';
 
 
@NgModule({
  declarations: [
    AppComponent,
    ListaEvaluacionesComponent,
    CrearEvaluacionComponent,
    DetallesEvaluacionComponent,
    ModificarEvaluacionComponent,
    CrearPlanDeEstudioComponent,
    ListaPlanDeEstudioComponent,
    DetallesPlanDeEstudioComponent,
    ModificarPlanDeEstudioComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [PlanDeEstudioService, EvaluacionService],
  bootstrap: [AppComponent],
})
export class AppModule { }