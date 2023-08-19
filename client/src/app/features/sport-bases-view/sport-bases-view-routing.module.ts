import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SportBasesViewComponent } from './sport-bases-view.component';

const routes: Routes = [
    {
        path: '',
        component: SportBasesViewComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SportBasesViewRoutingModule { }
