import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersViewComponent } from './teachers-view.component';

describe('TeachersViewComponent', () => {
  let component: TeachersViewComponent;
  let fixture: ComponentFixture<TeachersViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeachersViewComponent]
    });
    fixture = TestBed.createComponent(TeachersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
