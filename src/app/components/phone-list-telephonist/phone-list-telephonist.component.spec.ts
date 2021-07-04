import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneListTelephonistComponent } from './phone-list-telephonist.component';

describe('PhoneListTelephonistComponent', () => {
  let component: PhoneListTelephonistComponent;
  let fixture: ComponentFixture<PhoneListTelephonistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneListTelephonistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneListTelephonistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
