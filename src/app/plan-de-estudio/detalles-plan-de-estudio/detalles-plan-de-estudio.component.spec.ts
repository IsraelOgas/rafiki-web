import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesPlanDeEstudioComponent } from './detalles-plan-de-estudio.component';

describe('DetallesPlanDeEstudioComponent', () => {
  let component: DetallesPlanDeEstudioComponent;
  let fixture: ComponentFixture<DetallesPlanDeEstudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesPlanDeEstudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesPlanDeEstudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
