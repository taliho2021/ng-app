import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OceanHomeComponent } from './ocean-home.component';

describe('OceanHomeComponent', () => {
  let component: OceanHomeComponent;
  let fixture: ComponentFixture<OceanHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OceanHomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OceanHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
