import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirComponent } from './air/air.component';
import { TruckingComponent } from './trucking/trucking.component';
import { FclComponent } from './fcl/fcl.component';
import { LclComponent } from './lcl/lcl.component';

const routes: Routes = [
  { path: '', component: TruckingComponent },
  { path: 'air', component: AirComponent },
  { path: 'fcl', component: FclComponent},
  { path: 'lcl', component: LclComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, FclComponent, LclComponent],
  declarations: [FclComponent, LclComponent],
})
export class TruckingRoutingModule {}
