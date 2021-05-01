import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './shared/component/login/login.component';
import { LogoutComponent } from './shared/component/logout/logout.component';
import { AdminGuard } from './shared/utils/guards';

const routes: Routes = [
  {path: 'login', component: LoginComponent, pathMatch: 'full'},
  {path: 'logout', component: LogoutComponent, pathMatch: 'full'},
  {path: 'admin', canActivate: [AdminGuard], loadChildren: async () => (await import('./admin/admin.module')).AdminModule, pathMatch: 'full'},
  {path: 'user', canActivate: [], loadChildren: async () => (await import('./users/users.module')).UsersModule, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
