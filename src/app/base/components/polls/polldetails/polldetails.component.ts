import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-polldetails',
  templateUrl: './polldetails.component.html',
  styleUrls: ['./polldetails.component.css']
})
export class PolldetailsComponent {

  constructor(
    public dialogRef: MatDialogRef<PolldetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  // Close Dialoag Modal.
  close(): void {
    this.dialogRef.close();
  }
}
