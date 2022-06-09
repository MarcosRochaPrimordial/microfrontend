import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MeineLibOneRoutingModule } from './meine-lib-one-routing.module';
import { MeineLibOneComponent } from './meine-lib-one.component';

@NgModule({
  declarations: [
    MeineLibOneComponent,
  ],
  imports: [
    RouterModule,
    MeineLibOneRoutingModule,
  ]
})
export class MeineLibOneModule { }
