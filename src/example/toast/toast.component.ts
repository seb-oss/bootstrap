import {ScssImport} from '../../app/interfaces/scss-import';
import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {ToastContainerDirective, ToastrService} from 'ngx-toastr';

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
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {
  components: Array<ScssImport> = [{
    title: 'toasts',
    fileName: 'toasts',
    comment: 'toasts'
  }];

  title = '';
  message = '';
  @ViewChildren(ToastContainerDirective) inlineContainers: QueryList<ToastContainerDirective>;

  constructor(private toastr: ToastrService) { }

  ngOnInit() {}

  // generate random toast content
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

  // show toast
  showToast(type: 'info'| 'error' | 'warning' | 'success', disableTimeOut: boolean = false, inline: boolean = false ) {
    let config = {};
    if (disableTimeOut) {
      config = {...config, disableTimeOut: true};
    }
    if (inline) {
      this.toastr.overlayContainer = this.inlineContainers.toArray()[0];
      config = {...config, positionClass: 'inline'};

    }
    const toast = this.getToast();

    this.toastr[type](toast.message, toast.title, config);
  }

}
