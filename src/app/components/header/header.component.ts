import {Component, Input, OnInit} from '@angular/core';
import {MenuService} from '../../services/menu.service';
import {Observable, ReplaySubject} from 'rxjs';
import {map} from 'rxjs/internal/operators';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {NavService} from '../../services/nav.service';



@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    animations: [
        trigger('scrollAnimation', [
            state('show', style({
                opacity: 1,
                transform: 'translateY(0)'
            })),
            state('hide',   style({
                opacity: 0,
                transform: 'translateY(-100px)'
            })),
            transition('show => hide', animate('700ms ease-out')),
            transition('hide => show', animate('700ms ease-in'))
        ])
    ]
})
export class HeaderComponent implements OnInit {

    activeTab = 'components';
    private _scrollPosition = 0;
    stickyHeader = 'hide';
    $isActive: Observable<boolean>;

    get scrollPosition(): number {
        return this._scrollPosition;
    }

    @Input() set scrollPosition(value: number) {
        this._scrollPosition = value;

        if (this.scrollPosition >= 100) {
            this.stickyHeader = 'show';
        } else {
            this.stickyHeader = 'hide';
        }
    }
    constructor(private menuService: MenuService, private navService: NavService) { }

    ngOnInit() {
        this.$isActive = this.navService.getState();
    }

    getMenu() {
    }

    showMenu(tab:  'start' | 'components') {
        this.menuService.switchTab(tab);
    }

    toggleMenu() {
        this.navService.toggleState();
    }
}
