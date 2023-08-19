import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UniversitiesViewComponent } from './universities-view.component';

const routes: Routes = [
    {
        path: '',
        component: UniversitiesViewComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UniversitiesViewRoutingModule { }
