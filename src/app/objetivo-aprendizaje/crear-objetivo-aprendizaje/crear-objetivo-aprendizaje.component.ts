import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crear-objetivo-aprendizaje',
  templateUrl: './crear-objetivo-aprendizaje.component.html',
  styleUrls: ['./crear-objetivo-aprendizaje.component.css']
})
export class CrearObjetivoAprendizajeComponent implements OnInit {

  rForm: FormGroup;
  domain: string = 'http://localhost:10010';
  objetivosAprendizaje: any;
  tipos = ['Habilidad', 'Conocimiento', 'Actitud'];

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) {
    this.rForm = formBuilder.group({
      'numero': [null, Validators.required],
      'tipo': [null, Validators.required],
      'descripcion': [null, Validators.required]
    });
  }

  addObjetivoAprendizaje(post) {
    this.httpClient.post(`${this.domain}/aprendizajes`, post).subscribe(data => {
    });
  }

  ngOnInit() {
  }

}
