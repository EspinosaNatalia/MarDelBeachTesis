import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePlayaComponent } from './detalle-playa.component';

describe('DetallePlayaComponent', () => {
  let component: DetallePlayaComponent;
  let fixture: ComponentFixture<DetallePlayaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallePlayaComponent]
    });
    fixture = TestBed.createComponent(DetallePlayaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
