import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSportsComponent } from './top-sports.component';

describe('TopSportsComponent', () => {
  let component: TopSportsComponent;
  let fixture: ComponentFixture<TopSportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopSportsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopSportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
