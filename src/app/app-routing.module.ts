import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeineLibOneModule } from 'meine-lib-one';
import { MeineLibTwoModule } from 'meine-lib-two';

const routes: Routes = [
  {
    path: 'two',
    pathMatch: 'full',
    loadChildren: function () {
      return MeineLibTwoModule;
    },
  },
  {
    path: 'home',
    pathMatch: 'full',
    loadChildren: function () {
      return MeineLibOneModule;
    },
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
