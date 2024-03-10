import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopProsComponent } from './top-pros.component';

describe('TopProsComponent', () => {
  let component: TopProsComponent;
  let fixture: ComponentFixture<TopProsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopProsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopProsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
