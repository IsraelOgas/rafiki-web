import { Component, OnInit } from '@angular/core';
import { PlanDeEstudioService } from '../services/plan-de-estudio.service';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lista-plan-de-estudio',
  templateUrl: './lista-plan-de-estudio.component.html',
  styleUrls: ['./lista-plan-de-estudio.component.css'],
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
export class ListaPlanDeEstudioComponent implements OnInit {
  planDeEstudios: any;

  constructor(
    private planDeEstudio: PlanDeEstudioService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.getPlanEstudios();
  }

  getPlanEstudios(): void {
    this.planDeEstudio.getPlanEstudios()
      .subscribe(res => {
        this.planDeEstudios = res,
          console.log(res)
      })
  }

  deletePlanEstudio(id, i): void {
    const respuesta = confirm('¿ Estás seguro que deseas eliminarlo?');
    if (respuesta) {
      this.planDeEstudio.deletePlanEstudio(id)
        .subscribe(res => {
          this.planDeEstudios.planEstudio.splice(i, 1)
        }, (err) => {
          console.log(err);
        }
        )
    }
  }
}
