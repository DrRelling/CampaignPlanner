import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopupNoteComponent } from './popup-note-container/popup-note/popup-note.component';
import { PlannerComponent } from './planner/planner.component';
import { PopupNoteContainerComponent } from './popup-note-container/popup-note-container.component';
import { AngularDraggableModule } from 'angular2-draggable';

@NgModule({
  declarations: [AppComponent, PopupNoteComponent, PlannerComponent, PopupNoteContainerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularDraggableModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
