import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirExportGridComponent } from './air-export-grid.component';

describe('AirExportGridComponent', () => {
  let component: AirExportGridComponent;
  let fixture: ComponentFixture<AirExportGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AirExportGridComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AirExportGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
