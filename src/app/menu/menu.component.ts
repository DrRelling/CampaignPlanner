import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EntityFormDialogComponent } from '../dialogs/entity-form-dialog/entity-form-dialog.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  constructor(private dialog: MatDialog) { }

  public openNewEntityDialog(): void {
    const dialogRef = this.dialog.open(EntityFormDialogComponent);
  }

}
