import { Injectable } from '@angular/core';
import { PopupNote } from '../interfaces/popup-note';

@Injectable({
  providedIn: 'root',
})
export class PopupNoteService {
  public notes: PopupNote[] = [];
  private idCounter = 0;
  private topZIndex = 0;

  constructor() {
    this.createNote();
    this.createNote();
  }

  public getNewTopZIndex(): number {
    this.topZIndex += 1;
    return this.topZIndex;
  }

  public createNote(): void {
    const newNote: PopupNote = {
      id: this.idCounter++,
      style: {},
      title: this.idCounter.toString(),
      body: 'Note #' + this.idCounter,
    };

    this.notes.push(newNote);
  }

  public removeNote(id: number): void {
    this.notes = this.notes.filter(n => n.id !== id)
  }
}
