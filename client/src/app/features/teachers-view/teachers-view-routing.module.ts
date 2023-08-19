import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeachersViewComponent } from './teachers-view.component';

const routes: Routes = [
    {
        path: '',
        component: TeachersViewComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TeachersViewRoutingModule { }
