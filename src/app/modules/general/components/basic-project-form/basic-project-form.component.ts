import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basic-project-form',
  templateUrl: './basic-project-form.component.html',
  styleUrls: ['./basic-project-form.component.css']
})
export class BasicProjectFormComponent implements OnInit {

  projectForm = {} as FormGroup;
  sendResult: any = undefined;

  constructor(
    public currentModal: NgbActiveModal,
    public formBuilder: FormBuilder
  ) {
    this.projectForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['']
    });
  }

  ngOnInit(): void {
  }

  closeCurrentModal(): void {
    this.currentModal.dismiss('creation canceled');
  }

  onSubmit(): void {
    this.currentModal.close(this.projectForm.value);
  }

}
