import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportBasesViewComponent } from './sport-bases-view.component';

describe('SportBasesViewComponent', () => {
  let component: SportBasesViewComponent;
  let fixture: ComponentFixture<SportBasesViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SportBasesViewComponent]
    });
    fixture = TestBed.createComponent(SportBasesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
