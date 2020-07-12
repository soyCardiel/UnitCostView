import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicProjectFormComponent } from './basic-project-form.component';

describe('BasicProjectFormComponent', () => {
  let component: BasicProjectFormComponent;
  let fixture: ComponentFixture<BasicProjectFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicProjectFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicProjectFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
