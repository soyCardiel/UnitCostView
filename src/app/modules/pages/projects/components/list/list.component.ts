import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IBasicProject } from 'src/app/interfaces/projects/IBasicProject';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

   @Input() projects = [] as IBasicProject[];
   @Output() rowSelected: EventEmitter<IBasicProject> = new EventEmitter();

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  openProject(model: IBasicProject): void {
    this.rowSelected.emit(model);
  }

}
