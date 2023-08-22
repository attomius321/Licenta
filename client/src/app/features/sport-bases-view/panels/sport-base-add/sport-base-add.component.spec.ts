import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportBaseAddComponent } from './sport-base-add.component';

describe('SportBaseAddComponent', () => {
  let component: SportBaseAddComponent;
  let fixture: ComponentFixture<SportBaseAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportBaseAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportBaseAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
