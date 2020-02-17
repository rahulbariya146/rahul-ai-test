import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResult } from '../../modals/api-result';

@Injectable({ providedIn: 'root' })
export class PollsService {
  constructor(private httpClient: HttpClient) { }

  // Get Polls Data.
  getPolls(): Observable<ApiResult> {
    return this.httpClient.get<ApiResult>(environment.ApiEndPoint + 'search_by_date?tags=story');
  }
}
