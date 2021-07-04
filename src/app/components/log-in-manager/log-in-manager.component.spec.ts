import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInManagerComponent } from './log-in-manager.component';

describe('LogInManagerComponent', () => {
  let component: LogInManagerComponent;
  let fixture: ComponentFixture<LogInManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogInManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
