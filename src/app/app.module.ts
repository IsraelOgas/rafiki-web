import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListaCursosComponent } from './lista-cursos/lista-cursos.component';
import { CrearCursoComponent } from './cursos/crear-curso/crear-curso.component';
import { ModificarCursoComponent } from './cursos/modificar-curso/modificar-curso.component';
import { AppRoutingModule } from './app-routing.module';
import { DetalleCursoComponent } from './cursos/detalle-curso/detalle-curso.component';

import { FormsModule }    from '@angular/forms';
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
    ListaCursosComponent,
    CrearCursoComponent,
    ModificarCursoComponent,
    DetalleCursoComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    routing
  ],
  providers: [        
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