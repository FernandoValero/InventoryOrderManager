import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Notyf } from 'notyf';
import { User } from '../../models/user';
import { UserOwner } from '../../models/user-owner';
import { UserAdministrator } from '../../models/user-administrator';
import { UserClient } from '../../models/user-client';
import { UserDeliberyPerson } from '../../models/user-delibery-person';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {

  notyf = new Notyf({
    duration: 5000,
    position: {
      x: 'right',
      y: 'top',
    }
  });

  user!: UserAdministrator| UserClient| UserDeliberyPerson | UserOwner;
  action!: string;

  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.initVariables();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id'] == '0') {
        this.action = 'new';
      } else {
        this.action = 'update';
      }
    });
  }

  //Initialize variables
  public initVariables(): void {
    
  }

  public registerUser(): void {
    this.userService.create(this.user).subscribe(
      (result) => {
        if (result.status == 1) {
          this.notyf.success("User registered successfully!");
          this.router.navigate(['/suppliers']);
        }
      },
      (error) => {
        console.log(error);
      })
  }
}
