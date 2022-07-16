import { Component, OnInit } from '@angular/core';
import { PopupNoteService } from '../../services/popup-note.service';
import { PopupNote } from '../../interfaces/popup-note';

@Component({
  selector: 'app-popup-note-container',
  templateUrl: './popup-note-container.component.html',
  styleUrls: ['./popup-note-container.component.scss'],
})
export class PopupNoteContainerComponent implements OnInit {
  public popupNotes: PopupNote[] = [];

  constructor(private popupNoteService: PopupNoteService) {}

  ngOnInit(): void {
    this.popupNoteService.notes$.subscribe((n) => (this.popupNotes = n));
  }

  public addNote(): void {
    console.log('New note');
  }
}
