import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatewellborecoreComponent } from './updatewellborecore.component';

describe('UpdatewellborecoreComponent', () => {
  let component: UpdatewellborecoreComponent;
  let fixture: ComponentFixture<UpdatewellborecoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatewellborecoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatewellborecoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
