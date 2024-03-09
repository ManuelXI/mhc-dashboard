import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersLocationsComponent } from './users-locations.component';

describe('UsersLocationsComponent', () => {
  let component: UsersLocationsComponent;
  let fixture: ComponentFixture<UsersLocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersLocationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsersLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
