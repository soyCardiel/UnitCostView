import { Component, OnInit } from '@angular/core';
import { fader } from 'src/app/commons/route-animations';

@Component({
  selector: 'app-project-configuration',
  templateUrl: './project-configuration.component.html',
  styleUrls: ['./project-configuration.component.css'],
  animations: [
    fader
  ]
})
export class ProjectConfigurationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
