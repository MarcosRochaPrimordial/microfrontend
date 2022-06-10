import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { MeineLibTwoRoutingModule } from './meine-lib-two-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    MeineLibTwoRoutingModule,
  ],
})
export class MeineLibTwoModule { }
