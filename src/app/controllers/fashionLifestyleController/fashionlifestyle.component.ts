import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Notes } from 'src/app/utils/notes';
import { Observable } from 'rxjs';

@Component({
  selector: 'fashionlifestyle-control',
  templateUrl: './fashionlifestyle.component.html',
  styleUrls: ['./fashionlifestyle.component.css']
})
export class FashionLifestyleComponent implements OnInit {
  private notesCollection: AngularFirestoreCollection<Notes>;
  notes: Notes[] = [];
  titleNote: string;
  constructor(private afs: AngularFirestore) {}

  ngOnInit() {
    this.notesCollection = this.afs.collection<Notes>('notes');
    this.notesCollection.valueChanges().subscribe((notes: Notes[]) => {
      this.notes = [];
      notes.forEach(note =>  {
        console.log(note);
        this.notes.push(note);
      });
    });
  }
}
