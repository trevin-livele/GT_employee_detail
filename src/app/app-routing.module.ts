import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  
  {
    path: 'dashboard',
    canActivate: [],
    loadChildren: ()=> import('./dashboard/dashboard.module').then((m)=>m.DashboardModule)
  },

  {
    path: 'employees',
    canActivate: [],
    loadChildren: () => import('./employees/employees.module').then((m) => m.EmployeesModule),
  },

 
  { path: '**', component: PageNotFoundComponent, canActivate: [] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



