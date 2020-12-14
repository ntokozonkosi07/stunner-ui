import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyoutServiceComponent } from './flyout-service.component';

describe('FlyoutServiceComponent', () => {
  let component: FlyoutServiceComponent;
  let fixture: ComponentFixture<FlyoutServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlyoutServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlyoutServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
