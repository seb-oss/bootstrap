import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styles: []
})
export class IconsComponent implements OnInit {

    iconSearchString = '';
    icons: Array<string> = [
        'archive',
        'lock-alt',
        'unlock-alt',
        'cog',
        'print',
        'calendar-alt',
        'phone',
        'mobile',
        'tablet',
        'desktop-alt',
        'envelope',
        'share-alt',
        'user-alt',
        'comment-alt',
        'comments',
        'link',
        'external-link-square',
        'credit-card',
        'balance-scale',
        'bookmark',
        'book',
        'arrow-left',
        'arrow-right',
        'arrow-up',
        'arrow-down',
        'arrow-to-bottom',
        'long-arrow-left',
        'long-arrow-right',
        'long-arrow-up',
        'long-arrow-down',
        'chevron-left',
        'chevron-right',
        'chevron-up',
        'chevron-down',
        'sync',
        'at',
        'percent',
        'star',
        'heart',
        'plus',
        'minus',
        'exclamation-triangle',
        'copy',
        'upload',
        'calculator',
        'home',
        'clock',
        'filter',
        'search',
        'edit',
        'sign-in',
        'sign-out',
        'sliders-h',
        'sliders-v',
        'bell',
        'undo',
        'info-circle',
        'reply',
        'reply-all',
        'trash-alt',
        'times'
    ];
    filteredIcons: Array<string> = this.icons;


    filterIcons(search: string) {
        this.filteredIcons = this.icons.filter(icon => icon.indexOf(search) !== -1);
    }
  constructor() { }
  ngOnInit() {
  }

}
