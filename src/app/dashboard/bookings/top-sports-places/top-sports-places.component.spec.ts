import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSportsPlacesComponent } from './top-sports-places.component';

describe('TopSportsPlacesComponent', () => {
  let component: TopSportsPlacesComponent;
  let fixture: ComponentFixture<TopSportsPlacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopSportsPlacesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopSportsPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
