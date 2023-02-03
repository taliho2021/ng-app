import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';

const userRoutes: Routes = [{ path: '', component: UserListComponent }];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
