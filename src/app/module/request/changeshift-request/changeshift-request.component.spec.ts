import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeshiftRequestComponent } from './changeshift-request.component';

describe('ChangeshiftRequestComponent', () => {
  let component: ChangeshiftRequestComponent;
  let fixture: ComponentFixture<ChangeshiftRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeshiftRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeshiftRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
