import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from 'src/app/guards/admin.guard';

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
        canActivate: [AdminGuard],
        children: [
            {
                path: '',
                loadChildren: () => import('./../teachers-view/teachers-view.module').then(m => m.TeachersViewModule)
            }
        ]
    },
    {
        path: 'scheduler',
        children: [
            {
                path: '',
                loadChildren: () => import('./../scheduler-view/scheduler-view.module').then(m => m.SchedulerViewModule)
            }
        ]
    },
    {
        path: 'universities',
        children: [
            {
                path: '',
                loadChildren: () => import('./../universities-view/universities-view.module').then(m => m.UniversitiesViewModule)
            }
        ]
    },
    {
        path: 'sportbases',
        children: [
            {
                path: '',
                loadChildren: () => import('./../sport-bases-view/sport-bases-view.module').then(m => m.SportBasesViewModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BaseRoutingModule { }
