import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirExportSummaryComponent } from './air-export-summary.component';

describe('AirExportSummaryComponent', () => {
  let component: AirExportSummaryComponent;
  let fixture: ComponentFixture<AirExportSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AirExportSummaryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AirExportSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
