import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarPlanDeEstudioComponent } from './modificar-plan-de-estudio.component';

describe('ModificarPlanDeEstudioComponent', () => {
  let component: ModificarPlanDeEstudioComponent;
  let fixture: ComponentFixture<ModificarPlanDeEstudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarPlanDeEstudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarPlanDeEstudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
