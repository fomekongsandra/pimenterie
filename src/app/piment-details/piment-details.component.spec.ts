import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PimentDetailsComponent } from './piment-details.component';

describe('PimentDetailsComponent', () => {
  let component: PimentDetailsComponent;
  let fixture: ComponentFixture<PimentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PimentDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PimentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
