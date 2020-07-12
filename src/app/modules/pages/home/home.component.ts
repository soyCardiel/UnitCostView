import { Component, OnInit, ViewChild } from '@angular/core';
import { SidebarComponent } from '../../general/components/sidebar/sidebar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('sidebar') sidebar: SidebarComponent;
  constructor() { }

  ngOnInit(): void {
  }

  onSidebarToggle(ev: any): void {
    this.sidebar?.sidebarCollapse();
  }

}
