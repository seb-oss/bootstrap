import { Component, OnInit } from '@angular/core';
import {ModalDismissReasons, NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';

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
      this.modalService.open(content, {...options, ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
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
