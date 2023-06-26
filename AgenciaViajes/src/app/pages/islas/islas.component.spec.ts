import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IslasComponent } from './islas.component';

describe('IslasComponent', () => {
  let component: IslasComponent;
  let fixture: ComponentFixture<IslasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IslasComponent]
    });
    fixture = TestBed.createComponent(IslasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
