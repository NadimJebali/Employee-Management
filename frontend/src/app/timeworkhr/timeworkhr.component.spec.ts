import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeworkhrComponent } from './timeworkhr.component';

describe('TimeworkhrComponent', () => {
  let component: TimeworkhrComponent;
  let fixture: ComponentFixture<TimeworkhrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeworkhrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeworkhrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
