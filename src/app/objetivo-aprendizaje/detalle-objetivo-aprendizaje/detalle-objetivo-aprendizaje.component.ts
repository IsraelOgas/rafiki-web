import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-objetivo-aprendizaje',
  templateUrl: './detalle-objetivo-aprendizaje.component.html',
  styleUrls: ['./detalle-objetivo-aprendizaje.component.css']
})
export class DetalleObjetivoAprendizajeComponent implements OnInit {

  objetivosAprendizaje: any;
  id: string= ""; //Borrar5a763951a100651780fe93de
  domain: string = 'http://localhost:10010';

  constructor(private httpClient: HttpClient, private route: ActivatedRoute) {
    this.route.params.subscribe(res => {
      this.id = res.id;
      console.log(res.id)
    });
  }

  getObjAprendizajes() {
    this.httpClient.get(`${this.domain}/aprendizajes/${this.id}`).subscribe(data => {
      // console.log(data);
      this.objetivosAprendizaje = data;
      console.log(this.objetivosAprendizaje);
    });
  }

  ngOnInit() {
    this.getObjAprendizajes();
  }

}
