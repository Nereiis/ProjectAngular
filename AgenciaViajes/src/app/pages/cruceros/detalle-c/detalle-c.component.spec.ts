import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCComponent } from './detalle-c.component';

describe('DetalleCComponent', () => {
  let component: DetalleCComponent;
  let fixture: ComponentFixture<DetalleCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleCComponent]
    });
    fixture = TestBed.createComponent(DetalleCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
