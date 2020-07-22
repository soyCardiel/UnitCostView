import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, Type } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.css']
})
export class CustomModalComponent implements OnInit {

  @ViewChild('templateContainer', {read: ViewContainerRef}) templateRef: ViewContainerRef;

  type: string;
  title: string;
  message: string;
  cancelBtnText: string;
  acceptBtnText: string;

  private dialogDefaultConfig: ICustomModalOptions = {
    title: 'Dialog',
    component: String,
    btnAcceptText: 'Ok',
    btnCancelText: 'Cancel',
    btnAcceptFn: this.onModalAccept,
    btnCancelFn: this.onModalClose
  };

  cancelFn: any;
  acceptFn: any;

  constructor(
    private currentModal: NgbActiveModal,
    private componentFactory: ComponentFactoryResolver
  ) { }

  ngOnInit(): void {
  }

  configureConfirm(opts: ICustomConfirmOptions): void {
    this.type = 'confirm';
    this.title = !opts.title ? 'Confirm?' : opts.title;
    this.message = opts.message;
    this.acceptBtnText = 'Confirm';
  }

  configureAlert(opts: ICustomAlertOptions): void {
    this.type = 'alert';
    this.title = !opts.title ? 'Alert!' : opts.title;
    this.message = opts.message;
    this.acceptBtnText = 'Accept';
  }

  configureDialog(opts: ICustomModalOptions): void {
    const config = { ...this.dialogDefaultConfig, ...opts };
    this.type = 'dialog';
    this.title = config.title;
    this.acceptBtnText = config.btnAcceptText;
    this.cancelBtnText = config.btnCancelText;
    this.cancelFn = config.btnCancelFn;
    this.acceptFn = config.btnAcceptFn;
    setTimeout(() => {
      const componentFactory = this.componentFactory.resolveComponentFactory(config.component);
      this.templateRef.clear();
      const componentRef = this.templateRef.createComponent(componentFactory);
    }, 100);
  }

  onModalClose(): void {
    this.currentModal.dismiss('close');
  }

  onModalAccept(): void {
    this.currentModal.close('accepted');
  }

}

export interface ICustomModalOptions {
  title?: string;
  component: Type<unknown>;
  btnAcceptText?: string;
  btnAcceptFn?: any;
  btnCancelText?: string;
  btnCancelFn?: any;
}

export interface ICustomConfirmOptions {
  title?: string;
  message: string;
}

export interface ICustomAlertOptions {
  title?: string;
  message: string;
}
