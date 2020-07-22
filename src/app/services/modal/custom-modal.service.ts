import { Injectable, ViewContainerRef, ComponentFactoryResolver, Type } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomModalComponent, ICustomModalOptions, ICustomConfirmOptions } from 'src/app/components/common/modal/custom-modal/custom-modal.component';

@Injectable({
  providedIn: 'root'
})
export class CustomModalService {

  constructor(
    private modalService: NgbModal
  ) { }

  confirm(message: string, title?: string ): Promise<any> {
    const modalRef = this.modalService.open(CustomModalComponent, {keyboard: false, backdrop: 'static', size: 'lg'});
    const componentInstance = modalRef.componentInstance as CustomModalComponent;

    componentInstance.configureConfirm( {title, message} );
    return modalRef.result;
  }

  alert(message: string, title?: string ): Promise<any>  {
    const modalRef = this.modalService.open(CustomModalComponent, {keyboard: false, backdrop: 'static', size: 'lg'});
    const componentInstance = modalRef.componentInstance as CustomModalComponent;

    componentInstance.configureAlert( {title, message} );
    return modalRef.result;
  }

  dialog(component: Type<unknown>, title: string): Promise<any> {
    const modalRef = this.modalService.open(CustomModalComponent, {keyboard: false, backdrop: 'static', size: 'lg'});
    const componentInstance = modalRef.componentInstance as CustomModalComponent;
    componentInstance.configureDialog( {title, component} );
    return modalRef.result;
  }

}
