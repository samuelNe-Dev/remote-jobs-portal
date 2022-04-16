import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class JobsDataService {

  constructor(private httpClient: HttpClient ) { }

  getJobs() {
    return this.httpClient.get<any>('https://remotive.com/api/remote-jobs?category=software-dev');
  }
}
