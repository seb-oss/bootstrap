import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';
import {MenuService} from '../../services/menu.service';
import {MenuItem} from '../../interfaces/menu-item';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent implements OnInit {



  activeRoute: string;
  constructor(private router: Router, private menuService: MenuService) { }
  $startItems: Observable<Array<MenuItem>>;
  $menuItems: Observable<Array<MenuItem>>;

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe( (event: any) => {
      this.activeRoute = event['urlAfterRedirects'];
    });
    this.$menuItems = this.menuService.getComponents();
    this.$startItems = this.menuService.getStartItems();
  }

}
