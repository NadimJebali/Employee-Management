import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeworkComponent } from './timework.component';

describe('TimeworkComponent', () => {
  let component: TimeworkComponent;
  let fixture: ComponentFixture<TimeworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeworkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
