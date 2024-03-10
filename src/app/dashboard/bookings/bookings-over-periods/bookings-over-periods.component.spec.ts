import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingsOverPeriodsComponent } from './bookings-over-periods.component';

describe('BookingsOverPeriodsComponent', () => {
  let component: BookingsOverPeriodsComponent;
  let fixture: ComponentFixture<BookingsOverPeriodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookingsOverPeriodsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookingsOverPeriodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
