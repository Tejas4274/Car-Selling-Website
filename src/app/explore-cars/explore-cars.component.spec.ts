import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreCarsComponent } from './explore-cars.component';

describe('ExploreCarsComponent', () => {
  let component: ExploreCarsComponent;
  let fixture: ComponentFixture<ExploreCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExploreCarsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExploreCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
