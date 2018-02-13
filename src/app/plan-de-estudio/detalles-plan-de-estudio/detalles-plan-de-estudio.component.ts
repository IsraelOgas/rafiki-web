import { Component, OnInit } from '@angular/core';
import { PlanDeEstudioService } from '../services/plan-de-estudio.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalles-plan-de-estudio',
  templateUrl: './detalles-plan-de-estudio.component.html',
  styleUrls: ['./detalles-plan-de-estudio.component.css']
})
export class DetallesPlanDeEstudioComponent implements OnInit {
  planestudio: any;
  id: String;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private planEstudioService: PlanDeEstudioService,
  ) {
    this.route.params.subscribe(res => {
      this.id = res.id;
    })
  }

  getPlanEstudio(): void {
    this.planEstudioService.getPlanEstudio(this.id)
      .subscribe(res => {
        this.planestudio = res,
          console.log(res)
      }
      )
  }

  ngOnInit() {
    this.getPlanEstudio();
  }
}
