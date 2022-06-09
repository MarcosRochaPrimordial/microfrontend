import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeModule } from "./home/home.module";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadChildren: function() {
            return HomeModule;
        },
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MeineLibOneRoutingModule { }