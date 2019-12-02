import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'blogs-control',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent {/* } implements OnInit{ */
  /* notesCollection: AngularFirestoreCollection<Note>;
  notes: Observable<Note[]>;

  constructor(private afs: AngularFirestore) {}

  ngOnInit() {
    this.notesCollection = this.afs.collection('notes');
    this.notes = this.notesCollection.valueChanges();
  } */
}
