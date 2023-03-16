import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimecorrectionRequestComponent } from './timecorrection-request.component';

describe('TimecorrectionRequestComponent', () => {
  let component: TimecorrectionRequestComponent;
  let fixture: ComponentFixture<TimecorrectionRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimecorrectionRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimecorrectionRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
