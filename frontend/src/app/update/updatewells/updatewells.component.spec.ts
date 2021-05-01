import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatewellsComponent } from './updatewells.component';

describe('UpdatewellsComponent', () => {
  let component: UpdatewellsComponent;
  let fixture: ComponentFixture<UpdatewellsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatewellsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatewellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
