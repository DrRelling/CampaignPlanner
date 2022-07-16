import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { PopupNote } from 'src/app/popup-note-container/interfaces/popup-note';
import { PopupNoteService } from 'src/app/services/popup-note.service';

@Component({
  selector: 'app-popup-note',
  templateUrl: './popup-note.component.html',
  styleUrls: ['./popup-note.component.scss'],
})
export class PopupNoteComponent implements OnInit {
  public width: number = 200;
  public height: number = 200;
  public zIndex = 1;

  public globalNoteResizing = false;

  private resizing = false;
  private mouse: { x: number; y: number } = { x: 0, y: 0 };
  private position: { top: number; left: number } = { top: 0, left: 0 };

  @Input()
  public data!: PopupNote;

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mouse = { x: event.clientX, y: event.clientY };
    if (this.resizing) {
      this.resize();
    }
  }

  @ViewChild('note')
  private note: ElementRef | null = null;

  constructor(private popupNoteService: PopupNoteService) {}

  ngOnInit(): void {
    this.moveToFront();
    this.popupNoteService.noteResizing$.subscribe(r => this.globalNoteResizing = r);
  }

  public moveToFront(): void {
    this.zIndex = this.popupNoteService.getNewTopZIndex();
  }

  public startResize(): void {
    const { left, top } = this.note?.nativeElement?.getBoundingClientRect();
    this.position.left = left;
    this.position.top = top;
    this.resizing = true;
    this.popupNoteService.startResize();
  }

  public stopResize(): void {
    if (this.resizing) {
      this.resizing = false;
      this.popupNoteService.stopResize();
    }
  }

  public close(): void {
    this.popupNoteService.removeNote(this.data.id);
  }

  private resize(): void {
    this.width = Math.max(this.mouse.x - this.position.left, 64);
    this.height = Math.max(this.mouse.y - this.position.top, 64);
  }
}
