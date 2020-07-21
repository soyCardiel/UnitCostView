import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutWithoutSidebarComponent } from './layout-without-sidebar.component';

describe('LayoutWithoutSidebarComponent', () => {
  let component: LayoutWithoutSidebarComponent;
  let fixture: ComponentFixture<LayoutWithoutSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutWithoutSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutWithoutSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
