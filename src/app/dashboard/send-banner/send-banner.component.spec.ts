import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendBannerComponent } from './send-banner.component';

describe('SendBannerComponent', () => {
  let component: SendBannerComponent;
  let fixture: ComponentFixture<SendBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SendBannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SendBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
