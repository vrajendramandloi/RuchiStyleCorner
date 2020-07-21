import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ShowMessageDialogCatalog } from "./showMessageDialog/showMessageDialog";
import { ConfirmDialogCatalog } from "./confirmMessageDialog/confirmDialog";

@Injectable({
  providedIn: 'root'
})
export class DisplayDialogUtils {
  constructor(public dialog: MatDialog) { }
  displayMessageDialog(message: string, status: string) {
    this.dialog.open(ShowMessageDialogCatalog, {
      data: {
        outputText: message,
        status: status
      }
    });
  }
  showConfirmDialog(message: string) {
    return this.dialog.open(ConfirmDialogCatalog, {
      data: {
        outputText: message,
        status: 'confirm'
      },
      disableClose: false
    });
  }
}
