import { Injectable } from '@angular/core';
import {
    MatSnackBar,
    MatSnackBarHorizontalPosition,
    MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

const DURATION = 3000;

@Injectable({
    providedIn: 'root'
})
export class SnackBarService {
    horizontalPosition: MatSnackBarHorizontalPosition = 'center';
    verticalPosition: MatSnackBarVerticalPosition = 'top';

    constructor(private _snackBar: MatSnackBar) { }

    openGenericSnackbar(text: string) {
        this._snackBar.open(text, 'x', {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            panelClass: ['snackbar'],
            duration: DURATION
        });
    }

    openErrorSnackbar(text: string) {
        this._snackBar.open(text, 'x', {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            panelClass: ['error-snackbar'],
            duration: DURATION
        });
    }


}