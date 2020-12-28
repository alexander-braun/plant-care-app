import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantProfileComponent } from './plant-profile.component';

describe('PlantProfileComponent', () => {
  let component: PlantProfileComponent;
  let fixture: ComponentFixture<PlantProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
