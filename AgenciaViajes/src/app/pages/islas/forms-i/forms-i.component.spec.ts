import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsIComponent } from './forms-i.component';

describe('FormsIComponent', () => {
  let component: FormsIComponent;
  let fixture: ComponentFixture<FormsIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormsIComponent]
    });
    fixture = TestBed.createComponent(FormsIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
