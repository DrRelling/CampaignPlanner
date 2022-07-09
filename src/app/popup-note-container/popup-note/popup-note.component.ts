import { Component, Input, OnInit } from '@angular/core';
import { PopupNote } from 'src/app/popup-note-container/interfaces/popup-note';
import { PopupNoteService } from 'src/app/services/popup-note.service';

@Component({
  selector: 'app-popup-note',
  templateUrl: './popup-note.component.html',
  styleUrls: ['./popup-note.component.scss']
})
export class PopupNoteComponent implements OnInit {

  @Input()
  public data!: PopupNote;
  
  public zIndex = 1;

  constructor(private popupNoteService: PopupNoteService) { }

  ngOnInit(): void {
    this.moveToFront();
  }

  public moveToFront(): void {
    this.zIndex = this.popupNoteService.getNewTopZIndex();
    console.log(this.zIndex);
  }

  public close(): void {
    this.popupNoteService.removeNote(this.data.id);
  }
}
