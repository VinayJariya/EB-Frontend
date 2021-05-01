import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Logout } from 'src/store/actions/auth';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new Logout())
  }

}
