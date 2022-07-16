import { Component } from '@angular/core';
import { PopupNoteService } from './services/popup-note.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Dr Relling\'s Campaign Planner';

  public resizingNote = false;

  constructor(popupNoteService: PopupNoteService) {
    popupNoteService.noteResizing$.subscribe(r => this.resizingNote = r);
  }
}
