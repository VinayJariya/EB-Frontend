import { SetAdminRole } from './../../../../store/actions/auth';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import jwt_decode from 'jwt-decode';
import { Login, Logout } from 'src/store/actions/auth';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginPayload: {
    username: string | null;
    password: string | null;
  } = {
    username: null,
    password: null,
  };

  constructor(private authService: AuthService, private store: Store, private router: Router) {}

  ngOnInit(): void {}

  async onSubmit() {
    try {
      const loginResult: any = await this.authService.login(this.loginPayload);
      if (loginResult['success'] == true) {
        this.store.dispatch(new Login());
        const decoded: any = jwt_decode(loginResult['token']);
        if (decoded['role'] == 'Super User') {
          this.store.dispatch(new SetAdminRole());
          this.router.navigate(['admin'])
        }else{
          this.router.navigate(['user'])
        }
      }
    } catch (err) {
      console.log(err);
    }
  }
}
