import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { oceanRoutes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(oceanRoutes)],
})
export class OceanModule {}
