import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsSComponent } from './forms-s.component';

describe('FormsSComponent', () => {
  let component: FormsSComponent;
  let fixture: ComponentFixture<FormsSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormsSComponent]
    });
    fixture = TestBed.createComponent(FormsSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
