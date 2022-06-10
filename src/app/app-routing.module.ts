import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('meine-lib-one').then(m => m.MeineLibOneModule),
  },
  {
    path: 'two',
    loadChildren: () => import('meine-lib-two').then(m => m.MeineLibTwoModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
