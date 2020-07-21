import { Component, OnInit, Input, ViewChild} from '@angular/core';
import { DxDrawerComponent } from 'devextreme-angular';
declare var $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @ViewChild('drawer') menuDrawer: DxDrawerComponent;

  openedStatus = true;

  navigation: any[] = [
    { id: 1, text: 'Dashboard', icon: 'dashboard' },
    { id: 2, text: 'Configuracion', icon: 'gear' }
  ];

  constructor() { }

  // ngOnInit(): void {
  //   // Hide submenus
  //   const self = this;
  //   $('#body-row .collapse').collapse('hide');

  //   // Collapse/Expand icon
  //   $('#collapse-icon').addClass('fa-angle-double-left');

  //   // Collapse click
  //   $('[data-toggle=sidebar-colapse]').click(() => {
  //     self.sidebarCollapse();
  //   });

  // }

  // sidebarCollapse(): void {
  //   $('.menu-collapsed').toggleClass('d-none');
  //   $('.sidebar-submenu').toggleClass('d-none');
  //   $('.submenu-icon').toggleClass('d-none');
  //   $('#sidebar-container').toggleClass('sidebar-expanded sidebar-collapsed');

  //   // Treating d-flex/d-none on separators with title
  //   const separatorTitle = $('.sidebar-separator-title');
  //   if (separatorTitle.hasClass('d-flex')) {
  //     separatorTitle.removeClass('d-flex');
  //   } else {
  //     separatorTitle.addClass('d-flex');
  //   }

  //   // Collapse/Expand icon
  //   $('#collapse-icon').toggleClass('fa-angle-double-left fa-angle-double-right');
  // }

  ngOnInit(): void {

  }

  changeToggle(isvisible: boolean): void {
      this.menuDrawer.opened = isvisible;
  }
}
