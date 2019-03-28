import {Component, OnInit} from '@angular/core';
import {ModalDismissReasons, NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

@Component({
    selector: 'app-modals',
    templateUrl: './modals.component.html',
    styles: [`
        #modalExample .modal {
            opacity: 1;
            display: block;
            position: initial;
        }
        .modal.active {
            display: block;
        }
    `]
})
export class ModalsComponent implements OnInit {

    modal = false;
    slideModal = false;
    takeOverModal = false;
    closeResult: string;

    constructor(private modalService: NgbModal) {}

    open(content, options? : NgbModalOptions) {

      const modal = this.modalService.open(content, {...options, ariaLabelledBy: 'modal-basic-title', beforeDismiss: () => {
          enableBodyScroll(contentBody);
        return true
        }});

      // workaround for iOS scroll
      const contentBody = modal['_contentRef'].nodes[0][1];

      modal.result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });

      disableBodyScroll(contentBody);
    }

    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return  `with: ${reason}`;
      }
    }

    ngOnInit() {
    }

}
