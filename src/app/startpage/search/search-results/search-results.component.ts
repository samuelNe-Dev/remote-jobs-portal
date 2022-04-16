import { Component, OnInit } from '@angular/core';
import { JobsDataService } from 'src/app/services/jobs-data.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  constructor(private jobData: JobsDataService) { }
  jobs = [];
  

  ngOnInit(): void {
  }

  showJobs() {
    this.jobData.getJobs().subscribe((data) => {
      
      this.jobs = data["jobs"];
      console.log(this.jobs);
    });
  }

}
