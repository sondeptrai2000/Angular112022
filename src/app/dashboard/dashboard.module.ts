import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AdminRouting } from "./dashboard.routing";
import {TableModule} from 'primeng/table';
import {TabViewModule} from 'primeng/tabview';
import { LeftMenuComponent } from './component/left-menu/left-menu.component';
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import {CalendarModule} from 'primeng/calendar';
import { DashboardHomeComponent } from "./component/dashboardHome/dashboardHome.component";

@NgModule({
  declarations: [
    LeftMenuComponent,
    DashboardHomeComponent,
  ],
  imports: [
    CommonModule,
    AdminRouting,
    TableModule,
    TabViewModule,
    FormsModule,
    ButtonModule,
    CalendarModule
  ],
  providers: [

  ]
})
export class AdminModule { }
