import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleSComponent } from './detalle-s.component';

describe('DetalleSComponent', () => {
  let component: DetalleSComponent;
  let fixture: ComponentFixture<DetalleSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleSComponent]
    });
    fixture = TestBed.createComponent(DetalleSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
