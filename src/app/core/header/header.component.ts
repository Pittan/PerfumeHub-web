import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { HeaderService } from './header.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'ph-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.styl']
})

export class HeaderComponent implements OnInit, OnDestroy {

  public title: string;
  public isMenuOpen: boolean;
  @HostBinding('style.backgroundColor') color: string;

  private subscription = new Subscription();

  constructor(private headerService: HeaderService) { }

  ngOnInit() {
    const titleSubscription = this.headerService.title.subscribe((val: string) => {
      this.title = val;
    });
    this.subscription.add(titleSubscription);

    const menuStatusSubscription = this.headerService.isMenuOpen.subscribe((isOpen: boolean) => {
      this.isMenuOpen = isOpen;
    });
    this.subscription.add(menuStatusSubscription);

    this.subscription.add(this.headerService.color.subscribe((color: string) => {
      this.color = color;
    }));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


  toggleMenu() {
    this.headerService.setIsMenuOpen(!this.isMenuOpen);
  }

}
