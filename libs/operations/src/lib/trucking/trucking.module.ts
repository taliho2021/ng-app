import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@ng-app/material';
import { TruckingRoutingModule } from './trucking-routing.module';
import { TruckingComponent } from './trucking/trucking.component';

@NgModule({
  imports: [CommonModule, TruckingRoutingModule, MaterialModule],
  declarations: [TruckingComponent]
})
export class TruckingModule {}
