import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject, Component } from '@angular/core';

@Component({
  selector: 'confirm-dialog',
  templateUrl: './confirmDialog.html'
})
export class ConfirmDialogCatalog {
  constructor(public dialogRef: MatDialogRef<ConfirmDialogData>,
    @Inject(MAT_DIALOG_DATA) public msgData: ConfirmDialogData) {}
}

export interface ConfirmDialogData {
  status: string;
  outputText: string;
}
