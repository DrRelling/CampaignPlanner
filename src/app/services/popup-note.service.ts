import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, Subject } from 'rxjs';
import { PopupNote } from '../interfaces/popup-note';

@Injectable({
  providedIn: 'root',
})
export class PopupNoteService {
  private _noteResizing$ = new BehaviorSubject(false)
  public noteResizing$ = this._noteResizing$.pipe(distinctUntilChanged());

  private notes: PopupNote[] = [];
  private _notes$ = new BehaviorSubject<PopupNote[]>(this.notes);
  public notes$ = this._notes$.asObservable();

  private idCounter = 0;
  private topZIndex = 0;

  constructor() {
    // this.createNote();
    // this.createNote();
  }

  public getNewTopZIndex(): number {
    this.topZIndex += 1;
    return this.topZIndex;
  }

  public createNote(): void {
    const newNote: PopupNote = {
      id: this.idCounter++,
      style: {},
      title: 'Title #' + this.idCounter.toString(),
      body: 'Note #' + this.idCounter,
    };

    this.notes.push(newNote);
    this.emitUpdatedNotes();
  }

  public startResize(): void {
    this._noteResizing$.next(true);
  }

  public stopResize(): void {
    this._noteResizing$.next(false);
  }

  public removeNote(id: number): void {
    this.notes = this.notes.filter(n => n.id !== id);
    this.emitUpdatedNotes();
  }

  private emitUpdatedNotes(): void {
    this._notes$.next(this.notes);
  }
}
