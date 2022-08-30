import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ReactiveFormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlannerComponent } from './planner/planner.component';

import { MenuComponent } from './menu/menu.component';
import { PopupNoteComponent } from './menu/popup-note-container/popup-note/popup-note.component';
import { PopupNoteContainerComponent } from './menu/popup-note-container/popup-note-container.component';
import { SidebarComponent } from './planner/sidebar/sidebar.component';
import { PlannerFormComponent } from './planner/planner-form/planner-form.component';
import { EntityFormDialogComponent } from './dialogs/entity-form-dialog/entity-form-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    PopupNoteComponent,
    PlannerComponent,
    PopupNoteContainerComponent,
    MenuComponent,
    SidebarComponent,
    PlannerFormComponent,
    EntityFormDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    DragDropModule,
    ReactiveFormsModule,
    MatInputModule,
    MatGridListModule,
    MatDialogModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
