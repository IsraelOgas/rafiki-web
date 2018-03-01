import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleObjetivoAprendizajeComponent } from './detalle-objetivo-aprendizaje.component';

describe('DetalleObjetivoAprendizajeComponent', () => {
  let component: DetalleObjetivoAprendizajeComponent;
  let fixture: ComponentFixture<DetalleObjetivoAprendizajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleObjetivoAprendizajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleObjetivoAprendizajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
