import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListnotifComponent } from './listnotif.component';

describe('ListnotifComponent', () => {
  let component: ListnotifComponent;
  let fixture: ComponentFixture<ListnotifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListnotifComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListnotifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
