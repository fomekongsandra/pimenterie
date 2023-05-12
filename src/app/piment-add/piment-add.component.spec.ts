import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PimentAddComponent } from './piment-add.component';

describe('PimentAddComponent', () => {
  let component: PimentAddComponent;
  let fixture: ComponentFixture<PimentAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PimentAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PimentAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
