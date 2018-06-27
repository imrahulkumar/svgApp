import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { IAppState } from "../../store";
import { Router } from "@angular/router";
import { DataServiceService } from "../msgService/data-service.service";
import {
  NgRedux,
  DevToolsExtension,
  NgReduxModule,
  select
} from "@angular-redux/store";
@Component({
  selector: "app-log",
  templateUrl: "./log.component.html",
  styleUrls: ["./log.component.css"]
})
export class LogComponent implements OnInit {
  @select() counter: Observable<any>;
  datas: string;
  StringData: string;
  array: any;
  stringmyData: any;
  message:any;
  constructor(
    private ngRedux: NgRedux<IAppState>,
    private router: Router,
    private data: DataServiceService
  ) {}
  ngOnInit() {
    this.counter.subscribe(counter => (this.datas = counter));
    console.log(this.datas);
    this.StringData = this.datas;
    // console.log("hey", this.StringData);
    this.stringmyData = this.StringData.split(" ");
    var stringArray = new Array();
    for (var i = 0; i < this.stringmyData.length; i++) {
      stringArray.push(this.stringmyData[i]);
      if (i != this.stringmyData.length - 1) {
      }
    }
    this.array = stringArray;
     this.data.currentMessage.subscribe(message => this.message = message);
  }
  goto(i, item,x,y) {
    // alert(i + item);
    var url = `existActicity/${i}/${item}/${x}/${y}`;
    this.router.navigate([url]);
  }
}
