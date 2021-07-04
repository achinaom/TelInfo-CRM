import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelephonistListComponent } from './telephonist-list.component';

describe('TelephonistListComponent', () => {
  let component: TelephonistListComponent;
  let fixture: ComponentFixture<TelephonistListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelephonistListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelephonistListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});
