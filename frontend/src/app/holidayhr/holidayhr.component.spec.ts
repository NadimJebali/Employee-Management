import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayhrComponent } from './holidayhr.component';

describe('HolidayhrComponent', () => {
  let component: HolidayhrComponent;
  let fixture: ComponentFixture<HolidayhrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HolidayhrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HolidayhrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
