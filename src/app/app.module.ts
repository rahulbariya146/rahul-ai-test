import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Components.
import { AppComponent } from './app.component';
import { PollsComponent } from './base/polls/polls.component';
import { PolldetailsComponent } from './base/polls/polldetails/polldetails.component';

// Material Modules.
import { MatTableModule, MatInputModule, MatDialogModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    PollsComponent,
    PolldetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule
  ],
  entryComponents: [PolldetailsComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
