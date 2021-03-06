import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from '../Services/modal.service';

@Component({
  selector: 'app-modal-bootstrap',
  templateUrl: './modal-bootstrap.component.html',
  styleUrls: ['./modal-bootstrap.component.css']
})
export class ModalBootstrapComponent implements OnInit {  
  closeResult!: string;
  
  constructor(private modalService: NgbModal, private modalNoLib: ModalService) {}

  ngOnInit(): void {
  }
    
  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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

  apri() {
    this.modalNoLib.open();
  }
}