import { UserInterface } from './../shared/models/user.model';
import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../shared/service/user-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: UserInterface[] = []

  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
    const result: any = this.userService.getUsers()
    console.log(result)
    this.users = result.users || []
  }

}
