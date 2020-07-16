import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject, Component } from '@angular/core';

@Component({
  selector: 'showMessage-dialog',
  templateUrl: './showMessageDialog.html'
})
export class ShowMessageDialogCatalog {
  constructor(public dialogRef: MatDialogRef<ShowMessageDialogData>,
    @Inject(MAT_DIALOG_DATA) public msgData: ShowMessageDialogData) {}
}

export interface ShowMessageDialogData {
  status: string;
  outputText: string;
}
