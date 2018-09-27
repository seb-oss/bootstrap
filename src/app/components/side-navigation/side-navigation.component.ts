import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';
import {MenuService} from '../../services/menu.service';
import {MenuItem} from '../../interfaces/menu-item';
import {Observable} from 'rxjs';
import {NavService} from '../../services/nav.service';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent implements OnInit {



  activeRoute: string;
  constructor(private router: Router, private menuService: MenuService, private navService: NavService) { }
  $startItems: Observable<Array<MenuItem>>;
  $baseItems: Observable<Array<MenuItem>>;
  $menuItems: Observable<Array<MenuItem>>;
  $isActive: Observable<boolean>;

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe( (event: any) => {
      this.activeRoute = event['urlAfterRedirects'];
    });
    this.$menuItems = this.menuService.getComponents();
    this.$startItems = this.menuService.getStartItems();
    this.$baseItems = this.menuService.getBaseItems();
    this.$isActive = this.navService.getState();
  }

  toggleMenu() {
    this.navService.toggleState(false);
  }

}
