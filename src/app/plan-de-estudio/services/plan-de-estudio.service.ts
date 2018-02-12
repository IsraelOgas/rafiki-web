import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PlanDeEstudioService {
  domain: string = "http://localhost:10010/planestudio";

  constructor(private http: HttpClient) { }

  /**
  * @name getPlanEstudios
  * @description Funcion que realiza una peticion /GET al servidor para obtener todas los planes de estudio existentes
  * @author Israel Ogas
  * @returns {Object} Object que contiene un Array de objetos de tipo {PlanEstudio}
  */
  getPlanEstudios() {
    return this.http.get(`${this.domain}`)
  }

  /**
  * @name getPlanEstudio
  * @description Funcion que realiza una peticion /GET al servidor para obtener un plan de estudio por medio de una ID
  * @author Israel Ogas
  * @param {String} id Es el identificador que se recibe para buscar el Objeto solicitado en la BD
  * @returns {Object} Object de tipo {PlanEstudio}
  */
  getPlanEstudio(id: String) {
    const url = `${this.domain}/${id}`;
    return this.http.get(url)
  }

  /**
  * @name postPlanEstudio
  * @description Funcion que envia una peticion /POST al servidor para guardar un plan de estudio en la BD
  * @author Israel Ogas
  * @param {Object} evaluacion Es el objeto que se va a guardar en la BD
  * @returns {Object} Object de tipo {PlanEstudio}
  */
  postPlanEstudio(evaluacion: Object) {
    return this.http.post(`${this.domain}`, evaluacion)
  }

  /**
  * @name updatePlanEstudio
  * @description Funcion que envia una peticion /PUT al servidor para modificar y guardar un plan de estudio en la BD
  * @author Israel Ogas
  * @param {Object} evaluacion Es el objeto que se va a guardar en la BD
  * @param {String} id Es el identificador que se recibe para buscar el Objeto solicitado en la BD
  * @returns {Object} Object de tipo {PlanEstudio}
  */
  updatePlanEstudio(evaluacion: Object, id: String) {
    return this.http.put(`${this.domain}/${id}`, evaluacion, httpOptions)
  }

  /**
  * @name deletePlanEstudio
  * @description Funcion que envia una peticion /DELETE al servidor para eliminar un plan de estudio en la BD
  * @author Israel Ogas
  * @param {String} id Es el identificador que se recibe para buscar el Objeto solicitado en la BD
  * @returns {Object} Object de tipo {PlanEstudio}
  */
  deletePlanEstudio(id: String) {
    return this.http.delete(`${this.domain}/${id}`)
  }
}
