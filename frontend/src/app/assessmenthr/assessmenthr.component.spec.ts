import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmenthrComponent } from './assessmenthr.component';

describe('AssessmenthrComponent', () => {
  let component: AssessmenthrComponent;
  let fixture: ComponentFixture<AssessmenthrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssessmenthrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssessmenthrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
