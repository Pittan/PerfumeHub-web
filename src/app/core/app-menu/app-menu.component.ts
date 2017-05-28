import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { HeaderService } from '../header/header.service';
import { Subscription } from 'rxjs/Subscription';
import { environment } from '../../../environments/environment';
import { UserService } from '../user.service';
import { User } from '../user';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'ph-app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.styl'],
  animations: [
    trigger('menuState', [
      state('inactive', style({
        transform: 'translateY(-100%)'
      })),
      state('active',   style({
        transform: 'translateY(0%)'
      })),
      transition('inactive => active', animate('200ms ease-in-out')),
      transition('active => inactive', animate('200ms ease-in-out'))
    ]),
    trigger('bgState', [
      state('inactive', style({
        backgroundColor: 'transparent'
      })),
      state('active',   style({
        backgroundColor: 'rgba(0, 0, 0, .7)'
      })),
      transition('inactive => active', animate('200ms ease-in-out')),
      transition('active => inactive', animate('200ms ease-in-out'))
    ]),
  ]
})
export class AppMenuComponent implements OnInit, OnDestroy {

  @HostBinding('style.display') isMenuOpen = 'none';

  public appVersion: string;
  public user: User = null;
  public menuState: string;

  private subscription = new Subscription();

  constructor(private headerService: HeaderService,
              private userService: UserService) { }

  ngOnInit() {
    this.menuState = 'inactive';

    const headerStatusSub = this.headerService.isMenuOpen.subscribe(isOpen => {
      if (isOpen) {
        this.isMenuOpen = 'block';
      }
      this.menuState = isOpen ? 'active' : 'inactive';
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

  dismiss() {
    this.headerService.setIsMenuOpen(false);
  }

  onAnimeDone() {
    this.isMenuOpen = this.menuState === 'active' ? 'block' : 'none';
  }

}
