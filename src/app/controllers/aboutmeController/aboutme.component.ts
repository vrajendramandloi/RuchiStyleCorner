import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DisplayDialogUtils } from '../../dialog/displayDialogUtils';
import { HttpClient } from '@angular/common/http';
import { CarouselComponentData } from '../carouselController/carousel.component';
import { WhatsAppNotificationService } from 'src/app/service/WhatsAppNotification.service';
import { WhatsAppReg } from 'src/app/modal/whatsAppReg';
import { firestore } from 'firebase';

@Component({
  selector: 'aboutme-control',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutMeComponent {
  private _jsonURL = 'assets/customJsonData/brandsCollaborated.json';
  imagesList: CarouselComponentData[] = [];
  constructor(private displayDialog: DisplayDialogUtils, private http: HttpClient,
    private registerService: WhatsAppNotificationService) {
    this.http.get(this._jsonURL).subscribe((data: CarouselComponentData[]) => {
      this.imagesList = data;
    });
  }
  regWhatsAppFormGroup = new FormGroup({
    fc_userFullName: new FormControl('', [Validators.required]),
    fc_userMobileNumberPrefix: new FormControl('+91', [
      Validators.required
    ]),
    fc_userMobileNumber: new FormControl('', [
      Validators.required,
      Validators.pattern("^[0-9]*$"),
      Validators.maxLength(10),
    ]),
    fc_userEmailId: new FormControl(''),
    fc_userPrefGenere: new FormControl('All'),
  });
  get fc_userFullName() {
    return this.regWhatsAppFormGroup.get('fc_userFullName');
  }
  get fc_userMobileNumberPrefix() {
    return this.regWhatsAppFormGroup.get('fc_userMobileNumberPrefix');
  }
  get fc_userMobileNumber() {
    return this.regWhatsAppFormGroup.get('fc_userMobileNumber');
  }
  get fc_userEmailId() {
    return this.regWhatsAppFormGroup.get('fc_userEmailId');
  }
  get fc_userPrefGenere() {
    return this.regWhatsAppFormGroup.get('fc_userPrefGenere');
  }
  registerForWhatsApp() {
    if (this.regWhatsAppFormGroup.valid) {
      const confirmDialog = this.displayDialog.showConfirmDialog('Continue to Register?');
      confirmDialog.afterClosed().subscribe(result => {
        if (result) {
          const mobileNumber = this.fc_userMobileNumberPrefix.value + '_' + this.fc_userMobileNumber.value;
          const newReg: WhatsAppReg = {
            fullName: this.fc_userFullName.value,
            mobileNum: mobileNumber,
            email: this.fc_userEmailId.value,
            dateTime: firestore.Timestamp.fromDate(new Date()),
            genereSelected: this.fc_userPrefGenere.value,
            registered: 'NO'
          };
          this.registerService.createNewEntry(newReg).then(response => {
            this.displayDialog.displayMessageDialog(mobileNumber + ' registered for notifications', 'SUCCESS');
          }).catch(error => {
            this.displayDialog.displayMessageDialog(mobileNumber + ' registration Failed', 'FAILURE');
          });
        }
      });
    }
  }
}
