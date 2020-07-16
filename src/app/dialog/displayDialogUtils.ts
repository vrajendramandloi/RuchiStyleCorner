import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ShowMessageDialogCatalog } from "./showMessageDialog/showMessageDialog";

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
}
