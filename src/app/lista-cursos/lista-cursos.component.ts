import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})

export class ListaCursosComponent implements OnInit {

  domain: string = 'http://localhost:10010';
  curso: any;

  constructor(private HttpClient: HttpClient) {
  }

  getCursos() {
    this.HttpClient.get(`${this.domain}/cursos`).subscribe(data => {
      //console.log(data);
      this.curso = data;
    });
  }
  deleteCurso(id){
    this.HttpClient.delete(`${this.domain}/cursos/${id}`).subscribe(data => {
      //console.log(data);
      this.ngOnInit();
    });
  }
  ngOnInit() {
    this.getCursos();
  }

}
