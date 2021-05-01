import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatewellboreComponent } from './updatewellbore.component';

describe('UpdatewellboreComponent', () => {
  let component: UpdatewellboreComponent;
  let fixture: ComponentFixture<UpdatewellboreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatewellboreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatewellboreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
