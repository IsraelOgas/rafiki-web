import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaObjetivoAprendizajeComponent } from './lista-objetivo-aprendizaje.component';

describe('ListaObjetivoAprendizajeComponent', () => {
  let component: ListaObjetivoAprendizajeComponent;
  let fixture: ComponentFixture<ListaObjetivoAprendizajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaObjetivoAprendizajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaObjetivoAprendizajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
