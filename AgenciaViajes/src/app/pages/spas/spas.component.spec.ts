import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpasComponent } from './spas.component';

describe('SpasComponent', () => {
  let component: SpasComponent;
  let fixture: ComponentFixture<SpasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpasComponent]
    });
    fixture = TestBed.createComponent(SpasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
