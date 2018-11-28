import {Component, OnInit} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

const toasts: Array<any> = [
    {
        title: 'Title',
        message: 'Message',
    },
    {
        message: 'Toast without title'
    },
    {
        title: 'Toast without message'
    },
    {
        title: 'Some title',
        message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Duis at est ut augue sodales laoreet.
        Suspendisse tincidunt ultricies metus vel bibendum.`,
    },
];

@Component({
    selector: 'app-toast-notifications',
    templateUrl: './toast-notifications.component.html'
})
export class ToastNotificationsComponent implements OnInit {
    title = '';
    message = '';
    constructor(private toastr: ToastrService) { }

    ngOnInit() {}

    getToast() {
        let m: string | undefined = this.message;
        let t: string | undefined = this.title;
        if (!this.title.length && !this.message.length) {
            const randomMessage = toasts[Math.floor(Math.random() * Math.floor(toasts.length))];
            m = randomMessage.message;
            t = randomMessage.title;
        }
        return {
            message: m,
            title: t,
        };
    }

    showToast(type: 'info'| 'error' | 'warning' | 'success', disableTimeOut: boolean = false, inline: boolean = false ) {
        let config = {};
        if (disableTimeOut) {
            config = {...config, disableTimeOut: true};
        }
        if (inline) {
            config = {...config, positionClass: 'inline'};
        }
        const toast = this.getToast();

        this.toastr[type](toast.message, toast.title, config);
        // this.toastr.show('test', type, {}, 'toast-' + type);
    }

}
