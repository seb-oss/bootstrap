import { Injectable } from '@angular/core';
import { MenuItem } from '../interfaces/menu-item';
import { of, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { routes } from '../../example/example-routing.module';
import { compareName } from './utilities.service';
const compare = (a, b) => {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
};
@Injectable({
  providedIn: 'root',
})
export class MenuService {
  $activeTab: ReplaySubject<string> = new ReplaySubject<string>(1);
  $menuItems: ReplaySubject<Array<MenuItem>> = new ReplaySubject<Array<MenuItem>>(1);
  start: Array<MenuItem> = [
    {
      name: 'About',
      path: '/about',
    },
    {
      name: 'Issues',
      path: 'https://github.com/sebgroup/bootstrap/issues',
    },
    {
      name: 'Wiki',
      path: 'https://github.com/sebgroup/bootstrap/wiki',
    },
  ];

  base: Array<MenuItem> = [
    {
      name: 'Fonts and typography',
      path: '/typography',
    },
    {
      name: 'Colors',
      path: '/colors',
    },
    {
      name: 'Icons',
      path: '/icons',
    },
  ];

  components: Array<any> = routes
    .filter((route) => route.path !== '**' && route.path !== '')
    .map((route) => {
      return {
        ...route,
        name: route.path.charAt(0).toUpperCase() + route.path.replace(/-/g, ' ').slice(1),
        path: '/examples/' + route.path,
      };
    })
    .sort(compareName);

  constructor() {
    this.updateMenu('start');
  }
  getMenu() {
    return this.$menuItems.asObservable();
  }

  getStartItems() {
    return of(this.start).pipe(map((res: Array<any>) => res.sort(compare)));
  }

  getBaseItems() {
    return of(this.base).pipe(map((res: Array<any>) => res.sort(compare)));
  }

  getComponents() {
    return of(this.components).pipe(map((res: Array<any>) => res.sort(compare)));
  }

  getActiveTab() {
    return this.$activeTab.asObservable();
  }

  switchTab(tab: 'start' | 'components' | 'base') {
    this.$activeTab.next(tab);
    this.updateMenu(tab);
  }

  updateMenu(menu: 'start' | 'components' | 'base') {
    if (menu === 'start') {
      this.$menuItems.next(this.start);
    } else if (menu === 'components') {
      this.$menuItems.next(this.components);
    } else {
      this.$menuItems.next(this.base);
    }
  }
}
