import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class PollsService {
  constructor(private httpClient: HttpClient) { }

  // Get Polls Data.
  getPolls(): Observable<any> {
    return this.httpClient.get(environment.ApiEndPoint + 'search_by_date?tags=story');
  }
}
