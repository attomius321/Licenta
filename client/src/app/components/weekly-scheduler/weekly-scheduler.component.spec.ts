import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklySchedulerComponent } from './weekly-scheduler.component';

describe('WeeklySchedulerComponent', () => {
  let component: WeeklySchedulerComponent;
  let fixture: ComponentFixture<WeeklySchedulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeklySchedulerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklySchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
