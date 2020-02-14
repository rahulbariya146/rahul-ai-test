import { Component, OnInit, OnDestroy } from '@angular/core';
import { PollsService } from './polls.service';
import { MatTableDataSource } from '@angular/material';
import { Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { PolldetailsComponent } from './polldetails/polldetails.component';
import { Hit } from '../modals/hit'
import { ApiResult } from '../modals/api-result'

@Component({
  selector: 'app-polls',
  templateUrl: './polls.component.html',
  styleUrls: ['./polls.component.css']
})
export class PollsComponent implements OnInit, OnDestroy {

  // Init Variables.
  dataSource: MatTableDataSource<Hit>;
  displayedColumns: string[] = ['title', 'url', 'created_at', 'author'];
  subscription: Subscription;
  
  constructor(private pollsService: PollsService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getLatestPolls();
  }

  // Get Latest Polls Data (Every 10 Seconds).
  getLatestPolls() {
    this.subscription = timer(0, 10000).pipe(
      switchMap(() => this.pollsService.getPolls())
    ).subscribe((response : ApiResult) => {
      this.dataSource = new MatTableDataSource(response.hits);
      this.setFilterPredicate();
    });
  }

  // Overide Global Filter Predicate Data.
  setFilterPredicate() {
    this.dataSource.filterPredicate = (data, filter: string): boolean => {
      return data.title.toLowerCase().includes(filter);
    };
  }

  // Apply Filter On Title Column Data.
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(row): void {
    // Set MatDialog Configuration Values.
    const matDialogConfig = new MatDialogConfig();
    matDialogConfig.width = '600px';
    matDialogConfig.data = { rowJson: row };
    // Open MatDialog With RowJson Data.
    const dialogRef = this.dialog.open(PolldetailsComponent, matDialogConfig);
    dialogRef.afterClosed();
  }

  // Unsubscribe Subscription When Component Is Changed.
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
