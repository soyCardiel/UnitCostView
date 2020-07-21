import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { navigation } from 'src/app/helpers/navigation';
import { DxTreeViewComponent } from 'devextreme-angular';

@Component({
  selector: 'app-navigationlist',
  templateUrl: './navigationlist.component.html',
  styleUrls: ['./navigationlist.component.css']
})
export class NavigationlistComponent implements OnInit {

  @ViewChild(DxTreeViewComponent, { static: true }) menu: DxTreeViewComponent;
  @Output() selectedItemChanged = new EventEmitter<string>();
  private menuItems: any;
  private isCompactMode = false;
  private menuSelectedItem: string;

  constructor() { }

  ngOnInit(): void {
  }


  get items(): any {
    if (!this.menuItems) {
      this.menuItems = navigation.map((item) => ({ ...item, expanded: !this.isCompactMode }));
    }

    return this.menuItems;
  }


  @Input()
  get compactMode(): boolean {
    return this.isCompactMode;
  }
  set compactMode(val) {
    this.isCompactMode = val;

    if (!this.menu.instance) {
      return;
    }

    if (val) {
      this.menu.instance.collapseAll();
    } else {
      this.menu.instance.expandItem(this.menuSelectedItem);
    }
  }


  @Input()
  set selectedItem(value: string) {
    this.menuSelectedItem = value;
    if (!this.menu.instance) {
      return;
    }

    this.menu.instance.selectItem(value);
  }

  onItemClick(event): void {
    this.selectedItemChanged.emit(event);
  }
}
