import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PimentIndexComponent } from './piment-index.component';

describe('PimentIndexComponent', () => {
  let component: PimentIndexComponent;
  let fixture: ComponentFixture<PimentIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PimentIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PimentIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
