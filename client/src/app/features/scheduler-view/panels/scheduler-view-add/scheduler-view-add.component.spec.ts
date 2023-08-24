import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulerViewAddComponent } from './scheduler-view-add.component';

describe('SchedulerViewAddComponent', () => {
  let component: SchedulerViewAddComponent;
  let fixture: ComponentFixture<SchedulerViewAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchedulerViewAddComponent]
    });
    fixture = TestBed.createComponent(SchedulerViewAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
