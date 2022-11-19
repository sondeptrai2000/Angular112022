import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardHomeComponent } from "./component/dashboardHome/dashboardHome.component";
import { LeftMenuComponent } from "./component/left-menu/left-menu.component";

const routes: Routes = [
  {
    path: 'left',
    component: LeftMenuComponent
  },
  {
    path: 'header',
    component: DashboardHomeComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRouting { }
