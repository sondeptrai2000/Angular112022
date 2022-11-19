import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LayOutComponent } from './shared/lay-out/lay-out.component';

const routes: Routes = [
  {
    path: '',
    component: LayOutComponent,
    children: [
      {
        path: 'data-configure',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.AdminModule)
      },
    ]
  },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
