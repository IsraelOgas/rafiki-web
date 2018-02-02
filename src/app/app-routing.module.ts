import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearOrganizacionComponent } from './organizacion/crear-organizacion/crear-organizacion.component';
import { ListaOrganizacionesComponent } from './organizacion/lista-organizaciones/lista-organizaciones.component';
import { ModificarOrganizacionComponent } from './organizacion/modificar-organizacion/modificar-organizacion.component';
import { DetallesOrganizacionComponent } from './organizacion/detalles-organizacion/detalles-organizacion.component';

import { ListaCursosComponent } from './lista-cursos/lista-cursos.component';
import { CrearCursoComponent } from './cursos/crear-curso/crear-curso.component';
import { ModificarCursoComponent } from './cursos/modificar-curso/modificar-curso.component';
import { DetalleCursoComponent } from './cursos/detalle-curso/detalle-curso.component';

const routes: Routes = [
  {
    path: '',
    component: ListaCursosComponent
  },
  {
    path: 'cursos/crear',
    component: CrearCursoComponent
  },
  {
    path: 'cursos/:id/editar',
    component: ModificarCursoComponent
  },
  {
    path: 'cursos/:id',
    component: DetalleCursoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
