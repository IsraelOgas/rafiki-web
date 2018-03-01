import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarObjetivoAprendizajeComponent } from './modificar-objetivo-aprendizaje.component';

describe('ModificarObjetivoAprendizajeComponent', () => {
  let component: ModificarObjetivoAprendizajeComponent;
  let fixture: ComponentFixture<ModificarObjetivoAprendizajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarObjetivoAprendizajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarObjetivoAprendizajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
