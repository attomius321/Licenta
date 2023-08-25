import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleViewPanelComponent } from './schedule-view-panel.component';

describe('ScheduleViewPanelComponent', () => {
  let component: ScheduleViewPanelComponent;
  let fixture: ComponentFixture<ScheduleViewPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleViewPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleViewPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
