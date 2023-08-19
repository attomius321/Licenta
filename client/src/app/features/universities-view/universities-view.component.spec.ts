import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversititesViewComponent } from './universitites-view.component';

describe('UniversititesViewComponent', () => {
  let component: UniversititesViewComponent;
  let fixture: ComponentFixture<UniversititesViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UniversititesViewComponent]
    });
    fixture = TestBed.createComponent(UniversititesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
