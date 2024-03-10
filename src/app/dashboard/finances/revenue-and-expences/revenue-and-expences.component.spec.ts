import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueAndExpencesComponent } from './revenue-and-expences.component';

describe('RevenueAndExpencesComponent', () => {
  let component: RevenueAndExpencesComponent;
  let fixture: ComponentFixture<RevenueAndExpencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RevenueAndExpencesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RevenueAndExpencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
