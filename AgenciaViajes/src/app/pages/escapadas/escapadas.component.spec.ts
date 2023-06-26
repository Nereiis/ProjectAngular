import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscapadasComponent } from './escapadas.component';

describe('EscapadasComponent', () => {
  let component: EscapadasComponent;
  let fixture: ComponentFixture<EscapadasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EscapadasComponent]
    });
    fixture = TestBed.createComponent(EscapadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
