import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';
import { UserRoutingModule } from './user-routing.module';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule,
    UserListComponent,
  ],
})
export class UserModule {}
