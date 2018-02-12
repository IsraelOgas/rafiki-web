import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPlanDeEstudioComponent } from './lista-plan-de-estudio.component';

describe('ListaPlanDeEstudioComponent', () => {
  let component: ListaPlanDeEstudioComponent;
  let fixture: ComponentFixture<ListaPlanDeEstudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPlanDeEstudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPlanDeEstudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
