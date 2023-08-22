import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericPanelComponent } from './generic-panel.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
    declarations: [
        GenericPanelComponent
    ],
    imports: [
        CommonModule,
        MatDialogModule,
        MatButtonModule
    ],
    exports: [
        GenericPanelComponent
    ]
})
export class GenericPanelModule { }
