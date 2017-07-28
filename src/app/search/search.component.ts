import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service.service'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  var1: any;
  count: number = 0;
  data: string;
  constructor(public demo: ServiceService) { }
  ngOnInit() {
    this.loadGitProjectDetails();

  }
  loadGitProjectDetails() {
    this.demo.getProjectDetails().subscribe(a => {
      this.var1 = a;
    })
  }
  func() {

    this.demo.setData_search(this.data);

    this.loadGitProjectDetails();
    this.count = 1;
  }
}
