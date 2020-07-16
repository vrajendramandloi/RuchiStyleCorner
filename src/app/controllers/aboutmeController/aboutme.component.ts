import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DisplayDialogUtils } from '../../dialog/displayDialogUtils';

@Component({
  selector: 'aboutme-control',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutMeComponent {
  constructor(private displayDialog: DisplayDialogUtils) { }
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
      console.log("registering user {}", this.regWhatsAppFormGroup);
      this.displayDialog.displayMessageDialog("user registered", "SUCCESS");
    }
  }
}
