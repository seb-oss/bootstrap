import { Injectable } from '@angular/core';
import {MenuItem} from '../interfaces/menu-item';
import {of, ReplaySubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  $activeTab: ReplaySubject<string> = new ReplaySubject<string>(1);
  $menuItems: ReplaySubject<Array<MenuItem>> = new ReplaySubject<Array<MenuItem>>(1);
    start: Array<MenuItem> = [{
        name: 'About',
        path: '/about'
    }, {
        name: 'Issues',
        path: 'https://github.com/sebgroup/bootstrap/issues'
    }, {
        name: 'Wiki',
        path: 'https://github.com/sebgroup/bootstrap/wiki'
    }];

    base: Array<MenuItem> = [{
        name: 'Fonts and typography',
        path: '/typography'
    }, {
        name: 'Colors',
        path: '/colors'
    }, {
        name: 'Icons',
        path: '/icons'
    }];

    components: Array<MenuItem> = [{
        name: 'Alerts',
        path: '/alerts'
    }, {
        name: 'Breadcrumbs',
        path: '/breadcrumbs'
    }, {
        name: 'Tabs',
        path: '/tabs'
    }, {
        name: 'Forms',
        path: '/forms'
    }, {
        name: 'Checkboxes and slide toggles',
        path: '/checkboxes-and-slide-toggles'
    }, {
        name: 'Radio buttons',
        path: '/radio-buttons'
    }, {
        name: 'Buttons',
        path: '/buttons'
    }, {
        name: 'Input group',
        path: '/input-group'
    }, {
        name: 'List group',
        path: '/list-group'
    }, {
        name: 'Dropdowns',
        path: '/dropdowns'
    }, {
        name: 'Cards',
        path: '/cards'
    }, {
        name: 'Tables',
        path: '/tables'
    }, {
        name: 'Modals',
        path: '/modals'
    }, {
        name: 'Pagination',
        path: '/pagination'
    }, {
        name: 'Tooltips',
        path: '/tooltips'
    }, {
        name: 'Accordion',
        path: '/accordion'
    }, {
        name: 'Loaders',
        path: '/loaders'
    }, {
      name: 'Skeleton loaders',
      path: '/skeleton-loader'
    }, {
        name: 'Datepicker',
        path: '/datepicker'
    }, {
        name: 'Navbar',
        path: '/navbar'
    }];

  constructor() {
    this.updateMenu('start');
  }
  getMenu() {
    return this.$menuItems.asObservable();
  }

  getStartItems() {
    return of(this.start);
  }

    getBaseItems() {
        return of(this.base);
    }

  getComponents() {
    return of(this.components);
  }

  getActiveTab() {
    return this.$activeTab.asObservable();
  }

  switchTab(tab:  'start' | 'components' | 'base') {
    this.$activeTab.next(tab);
    this.updateMenu(tab);
  }

  updateMenu(menu:  'start' | 'components' | 'base') {
    if (menu === 'start') {
      this.$menuItems.next(this.start);
    } else if (menu === 'components') {
        this.$menuItems.next(this.components);
    } else {
        this.$menuItems.next(this.base);
    }
  }
}
