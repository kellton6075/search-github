import { Component } from '@angular/core';
import {ServiceService} from './service.service'
import { NgModule }      from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  var1: any;
  count: number = 0;
  data: string;
  constructor(public demo: ServiceService) { }
  ngOnInit() {
    this.loadGitUserDetails();

  }
  loadGitUserDetails() {
    this.demo.getUserDetails().subscribe(a => {
      this.var1 = a;
    })
  }
  func() {

    this.demo.setData(this.data);

    this.loadGitUserDetails();
    this.count = 1;
  }
}
