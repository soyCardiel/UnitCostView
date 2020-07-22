import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ScreenService } from './services/screen/screen.service';

import {
  DxButtonModule,
  DxDataGridModule,
  DxTemplateModule,
  DxLoadPanelModule,
  DxPopupModule,
  DxTooltipModule,
  DxTextBoxModule,
  DxRadioGroupModule,
  DxNumberBoxModule,
  DxSelectBoxModule,
  DxMenuModule,
  DxAccordionModule,
  DxValidationGroupModule,
  DxValidatorModule,
  DxGalleryModule,
  DxDropDownBoxModule,
  DxListModule,
  DxTreeListModule,
  DxDateBoxModule,
  DxTextAreaModule,
  DxFormModule,
  DxChartModule,
  DxSwitchModule,
  DxScrollViewModule,
  DxTreeViewModule,
  DxToastModule,
  DxCalendarModule,
  DxTagBoxModule,
  DxFileUploaderModule,
  DxLoadIndicatorModule,
  DxColorBoxModule,
  DxCheckBoxModule,
  DxValidationSummaryModule,
  DxPivotGridModule,
  DxSchedulerModule,
  DxPieChartModule,
  DxLookupModule,
  DxTabPanelModule,
  DxToolbarModule,
  DxDrawerModule,
  DxTabsModule
} from 'devextreme-angular';


import { LayoutWithSidebarComponent } from 'src/app/components/common/layout/layout-with-sidebar/layout-with-sidebar.component';
import { LayoutWithoutSidebarComponent } from 'src/app/components/common/layout/layout-without-sidebar/layout-without-sidebar.component';
import { TopbarComponent } from 'src/app/components/common/layout/topbar/topbar.component';
import { SidebarComponent } from 'src/app/components/common/layout/sidebar/sidebar.component';
import { HttpService } from 'src/app/services/http-client/http.service';
import { ProjectService } from 'src/app/services/projects/project.service';
import { ProjectsComponent } from 'src/app/components/projects/projects.component';
import { BasicProjectFormComponent } from 'src/app/components/projects/components/basic-project-form/basic-project-form.component';
import { SessionStorageService } from 'src/app/services/session-storage/session-storage.service';
import { HttpClientModule } from '@angular/common/http';
import { ProjectListComponent } from 'src/app/components/projects/components/list/list.component';
import { WorkspaceComponent } from 'src/app/components/workspace/workspace.component';
import { DashboardComponent } from 'src/app/components/workspace/components/dashboard/dashboard.component';
import { NavigationlistComponent } from 'src/app/components/common/layout/navigationlist/navigationlist.component';
import { CatalogsComponent } from './components/workspace/components/catalogs/catalogs.component';
import {CustomModalService} from './services/modal/custom-modal.service';
import { CustomModalComponent } from './components/common/modal/custom-modal/custom-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutWithSidebarComponent,
    LayoutWithoutSidebarComponent,
    TopbarComponent,
    SidebarComponent,
    BasicProjectFormComponent,
    ProjectsComponent,
    ProjectListComponent,
    WorkspaceComponent,
    DashboardComponent,
    NavigationlistComponent,
    CatalogsComponent,
    CustomModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    DxButtonModule,
    DxDataGridModule,
    DxTemplateModule,
    DxLoadPanelModule,
    DxPopupModule,
    DxTooltipModule,
    DxTextBoxModule,
    DxRadioGroupModule,
    DxNumberBoxModule,
    DxSelectBoxModule,
    DxMenuModule,
    DxAccordionModule,
    DxValidationGroupModule,
    DxValidatorModule,
    DxGalleryModule,
    DxDropDownBoxModule,
    DxListModule,
    DxTreeListModule,
    DxDateBoxModule,
    DxTextAreaModule,
    DxFormModule,
    DxChartModule,
    DxSwitchModule,
    DxScrollViewModule,
    DxTreeViewModule,
    DxToastModule,
    DxCalendarModule,
    DxTagBoxModule,
    DxFileUploaderModule,
    DxLoadIndicatorModule,
    DxColorBoxModule,
    DxCheckBoxModule,
    DxValidationSummaryModule,
    DxPivotGridModule,
    DxSchedulerModule,
    DxPieChartModule,
    DxLookupModule,
    DxTabPanelModule,
    DxToolbarModule,
    DxDrawerModule,
    DxTabsModule,
    HttpClientModule,
  ],
  providers: [
    ScreenService,
    HttpService,
    SessionStorageService,
    ProjectService,
    CustomModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
