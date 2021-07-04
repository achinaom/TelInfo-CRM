import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallsForTodayComponent } from './calls-for-today.component';

describe('CallsForTodayComponent', () => {
  let component: CallsForTodayComponent;
  let fixture: ComponentFixture<CallsForTodayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallsForTodayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallsForTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
