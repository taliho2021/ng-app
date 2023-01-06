import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
export { Authenticate } from './authenticate';
export { User } from './user';
export { Importer } from './importer';

@NgModule({
  imports: [CommonModule],
})
export class DataModelsModule {}
