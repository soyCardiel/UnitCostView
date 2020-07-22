import { Component, OnInit } from '@angular/core';
import { CustomModalService } from 'src/app/services/modal/custom-modal.service';
import { BasicProjectFormComponent } from 'src/app/components/projects/components/basic-project-form/basic-project-form.component';

@Component({
  selector: 'app-catalogs',
  templateUrl: './catalogs.component.html',
  styleUrls: ['./catalogs.component.css']
})
export class CatalogsComponent implements OnInit {

  constructor(
    private customModalService: CustomModalService
  ) { }

  ngOnInit(): void {
  }

  openModal(): void {
    this.customModalService.dialog(BasicProjectFormComponent, 'Formulario').then(
    // this.customModalService.confirm( 'Realmente desea eliminar el elemento seleccionado', 'Eliminar elemento').then(
      (res) => {
        console.log(res);
      },
      (res) => {
        console.log(res);
      }
    );
  }

}
