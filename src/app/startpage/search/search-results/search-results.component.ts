import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { JobsDataService } from 'src/app/services/jobs-data.service';
import { SearchHandlerService } from 'src/app/services/search-handler.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  clickEventSubscription: Subscription | undefined;

  constructor(private jobData: JobsDataService, private searchHandler: SearchHandlerService) { 
    this.clickEventSubscription = searchHandler.getClickEvent().subscribe(() => {
      this.showJobs();
    });
  }

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
