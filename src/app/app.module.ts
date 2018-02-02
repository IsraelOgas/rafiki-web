import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

//Servicios
import { OrganizacionService } from './organizacion/services/organizacion.service';

import { ListaOrganizacionesComponent } from './organizacion/lista-organizaciones/lista-organizaciones.component';
import { CrearOrganizacionComponent } from './organizacion/crear-organizacion/crear-organizacion.component';
import { ModificarOrganizacionComponent } from './organizacion/modificar-organizacion/modificar-organizacion.component';
import { DetallesOrganizacionComponent } from './organizacion/detalles-organizacion/detalles-organizacion.component';
import { AppRoutingModule } from './/app-routing.module';

import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { ListaCursosComponent } from './lista-cursos/lista-cursos.component';
import { CrearCursoComponent } from './cursos/crear-curso/crear-curso.component';
import { ModificarCursoComponent } from './cursos/modificar-curso/modificar-curso.component';
import { AppRoutingModule } from './app-routing.module';
import { DetalleCursoComponent } from './cursos/detalle-curso/detalle-curso.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';

import { routing }        from './app.routing';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { JwtInterceptor } from './_helpers/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';

@NgModule({
  declarations: [
    AppComponent,
    ListaOrganizacionesComponent,
    CrearOrganizacionComponent,
    ModificarOrganizacionComponent,
    DetallesOrganizacionComponent,
    ListaCursosComponent,
    CrearCursoComponent,
    ModificarCursoComponent,
    DetalleCursoComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ListaCursosComponent,
    CrearCursoComponent,
    ModificarCursoComponent,
    DetalleCursoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  providers: [
    OrganizacionService,
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        },

        // provider used to create fake backend
        fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }