import { Injectable } from '@angular/core';
import {MenuItem} from '../interfaces/menu-item';
import {of, ReplaySubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  $activeTab: ReplaySubject<string> = new ReplaySubject<string>(1);
  $menuItems: ReplaySubject<Array<MenuItem>> = new ReplaySubject<Array<MenuItem>>(1);

  constructor() {
    //this.$activeTab.next('components');
    this.updateMenu('start');
  }
  getMenu() {
    return this.$menuItems.asObservable();
  }

  getStartItems() {
    return of(this.start);
  }

  getComponents() {
    return of(this.components);
  }

  getActiveTab() {
    return this.$activeTab.asObservable();
  }

  switchTab(tab:  'start' | 'components') {
    this.$activeTab.next(tab);
    this.updateMenu(tab);
  }

  updateMenu(menu: 'start' | 'components') {
    if(menu === 'start') {
      this.$menuItems.next(this.start);

    } else {
      this.$menuItems.next(this.components);
    }
  }

  start: Array<MenuItem> = [{
    name:'About',
    path:'/about'
  },{
    name:'Issues',
    path:'/issues'
  },{
    name:'Wiki',
    path:'/wiki'
  }]

  components:Array<MenuItem> = [{
    name:'Alerts',
    path:'/alerts'
  },{
    name:'Breadcrumbs',
    path:'/breadcrumbs'
  },{
    name:'Tabs',
    path:'/tabs'
  },{
    name:'Forms',
    path:'/forms'
  },{
    name:'Checkboxes and slide toggles',
    path:'/checkboxes-and-slide-toggles'
  },{
    name:'Buttons',
    path:'/buttons'
  },{
    name:'Input group',
    path:'/input-group'
  },{
    name:'List group',
    path:'/list-group'
  },{
    name:'Dropdowns',
    path:'/dropdowns'
  },{
    name:'Cards',
    path:'/cards'
  },{
    name:'Tables',
    path:'/tables'
  },{
    name:'Modals',
    path:'/modals'
  },{
    name:'Pagination',
    path:'/pagination'
  },{
    name:'Tooltips',
    path:'/tooltips'
  },{
    name:'Accordion',
    path:'/accordion'
  },{
    name:'Loaders',
    path:'/loaders'
  }];

}
