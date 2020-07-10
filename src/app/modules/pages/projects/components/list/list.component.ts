import { Component, OnInit, Input } from '@angular/core';
import { IBasicProject } from 'src/app/interfaces/projects/IBasicProject';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

   @Input('projects') projects = [] as IBasicProject[];

  constructor(
  ) { }

  ngOnInit(): void {
    
  }

}
