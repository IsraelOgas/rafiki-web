import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-lista-objetivo-aprendizaje',
  templateUrl: './lista-objetivo-aprendizaje.component.html',
  styleUrls: ['./lista-objetivo-aprendizaje.component.css'],
  animations: [
    trigger('animation', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(':enter', stagger('200ms', [
          animate('.6s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 }),
          ]))]), { optional: true })
        ,
        query(':leave', stagger('200ms', [
          animate('.6s ease-out', keyframes([
            style({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
            style({ opacity: 0, transform: 'translateY(-75%)', offset: 1.0 }),
          ]))]), { optional: true })
      ])
    ])
  ]
})
export class ListaObjetivoAprendizajeComponent implements OnInit {

  domain: string = 'http://localhost:10010';
  objetivosAprendizaje: any;

  constructor(private httpClient: HttpClient) { }

  getObjAprendizajes() {
    this.httpClient.get(`${this.domain}/aprendizajes`).subscribe(data => {
      // console.log(data);
      this.objetivosAprendizaje = data;
      console.log(this.objetivosAprendizaje);
    });
  }

  deleteObjAprendizaje(id,i) {
    this.httpClient.delete(`${this.domain}/aprendizajes/${id}`).subscribe(data => {
    });
    const respuesta = confirm('¿Estás seguro que deseas eliminarlo?');
    if (respuesta) {
      this.httpClient.delete(`${this.domain}/aprendizajes/${id}`).subscribe(data => {
        this.objetivosAprendizaje.objAprendizajes.splice(i, 1)
      }, (err) => {
        console.log(err);
      }
      )
    }
  }

  ngOnInit() {
    this.getObjAprendizajes();
  }

}
