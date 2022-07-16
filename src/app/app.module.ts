import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlannerComponent } from './planner/planner.component';

import { MenuComponent } from './menu/menu.component';
import { PopupNoteComponent } from './menu/popup-note-container/popup-note/popup-note.component';
import { PopupNoteContainerComponent } from './menu/popup-note-container/popup-note-container.component';
import { SidebarComponent } from './planner/sidebar/sidebar.component';
import { PlannerFormComponent } from './planner/planner-form/planner-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PopupNoteComponent,
    PlannerComponent,
    PopupNoteContainerComponent,
    MenuComponent,
    SidebarComponent,
    PlannerFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
