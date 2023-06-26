import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleIComponent } from './detalle-i.component';

describe('DetalleIComponent', () => {
  let component: DetalleIComponent;
  let fixture: ComponentFixture<DetalleIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleIComponent]
    });
    fixture = TestBed.createComponent(DetalleIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
