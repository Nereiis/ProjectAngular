import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsCComponent } from './forms-c.component';

describe('FormsCComponent', () => {
  let component: FormsCComponent;
  let fixture: ComponentFixture<FormsCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormsCComponent]
    });
    fixture = TestBed.createComponent(FormsCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
