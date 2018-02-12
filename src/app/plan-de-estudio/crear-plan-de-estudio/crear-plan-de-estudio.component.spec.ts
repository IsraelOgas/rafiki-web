import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPlanDeEstudioComponent } from './crear-plan-de-estudio.component';

describe('CrearPlanDeEstudioComponent', () => {
  let component: CrearPlanDeEstudioComponent;
  let fixture: ComponentFixture<CrearPlanDeEstudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearPlanDeEstudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPlanDeEstudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
