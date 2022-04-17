import { Component, OnInit } from '@angular/core';
import { SearchHandlerService } from 'src/app/services/search-handler.service';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss']
})
export class SearchFieldComponent implements OnInit {
  keyword: string = ''
  constructor(private searchHandler: SearchHandlerService) { }

  ngOnInit(): void {
  }

  searchJobs(){
    this.searchHandler.sendClickEvent();
  }

}
