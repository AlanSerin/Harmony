import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickiesComponent } from './stickies.component';

describe('StickiesComponent', () => {
  let component: StickiesComponent;
  let fixture: ComponentFixture<StickiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StickiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StickiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
