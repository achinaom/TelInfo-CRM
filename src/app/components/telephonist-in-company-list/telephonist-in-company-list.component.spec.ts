import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelephonistInCompanyListComponent } from './telephonist-in-company-list.component';

describe('TelephonistInCompanyListComponent', () => {
  let component: TelephonistInCompanyListComponent;
  let fixture: ComponentFixture<TelephonistInCompanyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelephonistInCompanyListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelephonistInCompanyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
