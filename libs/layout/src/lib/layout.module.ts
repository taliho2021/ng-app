import { CommonModule } from '@angular/common';
import { LayoutComponent } from './containers/layout/layout.component';
import { MaterialModule } from '@ng-app/material';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [CommonModule, MaterialModule, RouterModule, MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, LayoutModule],
  declarations: [LayoutComponent],
  exports : [LayoutComponent]
})
export class LayoutModule {}
