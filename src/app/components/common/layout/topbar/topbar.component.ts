import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  @Input() menuToggleEnabled = true;
  @Output() menuToggle = new EventEmitter<boolean>();

  @Input() title = 'Unit Costs';

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleMenu = () => {
    this.menuToggle.emit();
  }

}
