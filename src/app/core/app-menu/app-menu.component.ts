import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { HeaderService } from '../header/header.service';
import { Subscription } from 'rxjs/Subscription';
import { environment } from '../../../environments/environment';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'ph-app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.styl']
})
export class AppMenuComponent implements OnInit, OnDestroy {

  @HostBinding('style.display') isMenuOpen: string = 'none';

  public appVersion: string;
  public user: User = null;

  private subscription = new Subscription();

  constructor(private headerService: HeaderService,
              private userService: UserService) { }

  ngOnInit() {
    const headerStatusSub = this.headerService.isMenuOpen.subscribe(isOpen => {
      this.isMenuOpen = isOpen ? 'block' : 'none';
    });
    this.subscription.add(headerStatusSub);

    this.userService.getUser().subscribe(
      data => {
        this.user = data;
      }
    );

    this.appVersion = environment.version;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  login() {
    this.userService.login(window.location.href);
  }

  logout() {
    this.userService.logout(window.location.href);
  }

}
