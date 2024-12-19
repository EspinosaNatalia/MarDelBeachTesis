import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecificacionActividadComponent } from './especificacion-actividad.component';

describe('EspecificacionActividadComponent', () => {
  let component: EspecificacionActividadComponent;
  let fixture: ComponentFixture<EspecificacionActividadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EspecificacionActividadComponent]
    });
    fixture = TestBed.createComponent(EspecificacionActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
