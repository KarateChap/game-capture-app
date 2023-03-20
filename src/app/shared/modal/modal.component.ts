import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Input() modalID = '';
  constructor(public modalService: ModalService) {}

  ngOnInit() {

  }

  closeModal($event: Event){
      $event.preventDefault()

      this.modalService.toggleModal(this.modalID);
  }

}
