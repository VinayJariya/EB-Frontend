import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserInterface } from '../../models/user.model';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('addUser', {static: false}) addUser: NgForm | undefined
  user: UserInterface
  text: string = ''

  constructor(private authService: AuthService) {
    this.user = {
      email: null,
      username: null,
      firstName: null,
      lastName: null,
      password: null,
      hobbies: []

    }
  }

  ngOnInit(): void {
  }

  async onSubmit(){
    try {
      if(!this.addUser?.valid){
        throw new Error('Invalid Details')
      }
      const result = await this.authService.register(this.user)
      this.addUser?.resetForm()
    } catch (error) {
      console.log(error)
    }


  }

}
