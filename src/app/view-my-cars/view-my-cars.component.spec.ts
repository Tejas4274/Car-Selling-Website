import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMyCarsComponent } from './view-my-cars.component';

describe('ViewMyCarsComponent', () => {
  let component: ViewMyCarsComponent;
  let fixture: ComponentFixture<ViewMyCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewMyCarsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMyCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
