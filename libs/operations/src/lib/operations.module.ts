import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { operationsRoutes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(operationsRoutes)],
})
export class OperationsModule {}
