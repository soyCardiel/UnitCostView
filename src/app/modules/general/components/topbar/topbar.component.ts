import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  @Output() toggleSidebar = new EventEmitter();
  @Input() type: 'default';
  @Input() title = 'Unit Cost';


  showToggleButton: boolean;
  withToogleButton: string[] = ['workspace', 'home'];

  constructor() {
  }
  
  ngOnInit(): void {
    this.showToggleButton = this.withToogleButton.includes(this.type);
  }

  ontoggle(): void {
    this.toggleSidebar.emit({});
  }
}
