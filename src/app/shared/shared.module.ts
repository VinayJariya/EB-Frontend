import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './service/auth.service';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { UserListComponent } from './component/user-list/user-list.component';
import { FormsModule } from '@angular/forms';
import { LogoutComponent } from './component/logout/logout.component';



@NgModule({
  declarations: [LoginComponent, RegisterComponent, UserListComponent, LogoutComponent,],
  providers: [AuthService],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [LoginComponent, RegisterComponent, UserListComponent]
})
export class SharedModule { }
