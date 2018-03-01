import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modificar-objetivo-aprendizaje',
  templateUrl: './modificar-objetivo-aprendizaje.component.html',
  styleUrls: ['./modificar-objetivo-aprendizaje.component.css']
})
export class ModificarObjetivoAprendizajeComponent implements OnInit {

  rForm: FormGroup;
  objetivosAprendizaje: any;
  id: string= "";
  domain: string = 'http://localhost:10010';
  tipos = ['Habilidad', 'Conocimiento', 'Actitud'];

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient, private route: ActivatedRoute) {
    this.route.params.subscribe(res => {
      this.id = res.id;
    })
    this.rForm = formBuilder.group({
      'numero': [Validators.required],
      'tipo': [Validators.required],
      'descripcion': [Validators.required]
    });
  }

  getObjAprendizaje() {
    this.httpClient.get(`${this.domain}/aprendizajes/${this.id}`).subscribe(data => {
      this.objetivosAprendizaje = data;
      console.log(this.objetivosAprendizaje);
    });
  }

  updateObjAprendizaje(objAprendizaje) {
    console.log(objAprendizaje);
    this.httpClient.put(`${this.domain}/aprendizajes/${this.id}`, objAprendizaje).subscribe(data => {
      console.log(objAprendizaje);
    });
  }

  ngOnInit() {
    this.getObjAprendizaje();
  }

}
