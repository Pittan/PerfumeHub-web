import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'ph-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.styl']
})
export class AdminComponent implements OnInit {

  public user: User = null;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser().subscribe(
      data => {
        this.user = data;
      }
    );

    console.log(window.location.href);
  }

  login() {
    console.log('login');
    this.userService.login(window.location.href);
  }

  logout() {
    console.log('logout');
    this.userService.logout(window.location.href);
  }

}
