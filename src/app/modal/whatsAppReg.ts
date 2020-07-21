import { firestore } from 'firebase';

export class WhatsAppReg {
  fullName: string;
  mobileNum: string;
  email?: string;
  dateTime: firestore.Timestamp;
  genereSelected: string;
  registered?: string;
}
