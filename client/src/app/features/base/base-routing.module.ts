import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'students',
        children: [
            {
                path: '',
                loadChildren: () => import('./../students-view/students-view.module').then(m => m.StudentsViewModule)
            }
        ]
    },
    {
        path: 'teachers',
        children: [
            {
                path: '',
                loadChildren: () => import('./../teachers-view/teachers-view.module').then(m => m.TeachersViewModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BaseRoutingModule { }
