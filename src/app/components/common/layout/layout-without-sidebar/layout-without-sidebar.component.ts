import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-without-sidebar',
  templateUrl: './layout-without-sidebar.component.html',
  styleUrls: ['./layout-without-sidebar.component.css']
})
export class LayoutWithoutSidebarComponent implements OnInit {

  menuOpened = true;
  appTitle = 'Unit Costs';

  constructor() { }

  ngOnInit(): void {
  }

}
