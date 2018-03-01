import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearObjetivoAprendizajeComponent } from './crear-objetivo-aprendizaje.component';

describe('CrearObjetivoAprendizajeComponent', () => {
  let component: CrearObjetivoAprendizajeComponent;
  let fixture: ComponentFixture<CrearObjetivoAprendizajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearObjetivoAprendizajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearObjetivoAprendizajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
