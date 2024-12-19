import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecificacionPlayaComponent } from './especificacion-playa.component';

describe('EspecificacionPlayaComponent', () => {
  let component: EspecificacionPlayaComponent;
  let fixture: ComponentFixture<EspecificacionPlayaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EspecificacionPlayaComponent]
    });
    fixture = TestBed.createComponent(EspecificacionPlayaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
