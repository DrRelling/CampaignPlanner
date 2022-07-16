import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopupNoteComponent } from './popup-note-container/popup-note/popup-note.component';
import { PlannerComponent } from './planner/planner.component';
import { PopupNoteContainerComponent } from './popup-note-container/popup-note-container.component';

@NgModule({
  declarations: [AppComponent, PopupNoteComponent, PlannerComponent, PopupNoteContainerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
