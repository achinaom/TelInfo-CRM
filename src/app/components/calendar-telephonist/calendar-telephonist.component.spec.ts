import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarTelephonistComponent } from './calendar-telephonist.component';

describe('CalendarTelephonistComponent', () => {
  let component: CalendarTelephonistComponent;
  let fixture: ComponentFixture<CalendarTelephonistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarTelephonistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarTelephonistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
