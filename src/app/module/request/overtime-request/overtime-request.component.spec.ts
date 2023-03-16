import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OvertimeRequestComponent } from './overtime-request.component';

describe('OvertimeRequestComponent', () => {
  let component: OvertimeRequestComponent;
  let fixture: ComponentFixture<OvertimeRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OvertimeRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OvertimeRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
