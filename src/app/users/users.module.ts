import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { userRoutes } from './user.routes';



@NgModule({
  declarations: [UsersComponent],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(userRoutes)
  ]
})
export class UsersModule { }
