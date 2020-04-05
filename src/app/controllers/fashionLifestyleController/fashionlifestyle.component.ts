import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'fashionlifestyle-control',
  templateUrl: './fashionlifestyle.component.html',
  styleUrls: ['./fashionlifestyle.component.css']
})
export class FashionLifestyleComponent implements OnInit {
  titleNote: string;
  constructor(private afs: AngularFirestore) {}
  ngOnInit() {
  }
}
