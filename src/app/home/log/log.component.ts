import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { IAppState } from "../../store";
import { Router } from "@angular/router";
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
  data: string;
  StringData: string;
  array: any;
  stringmyData:any
  constructor(private ngRedux: NgRedux<IAppState>,  private router: Router) {}
  ngOnInit() {
    this.counter.subscribe(counter => (this.data = counter));
    console.log(this.data);
    this.StringData = this.data;
    // console.log("hey", this.StringData);
     this.stringmyData = this.StringData.split(" ");
    var stringArray = new Array();
    for (var i = 0; i < this.stringmyData.length; i++) {
      stringArray.push(this.stringmyData[i]);
      if (i != this.stringmyData.length - 1) {
      }
    }
    this.array = stringArray;
  }
goto(i,item)
{
 // alert(i + item);
    var url = `existActicity/${i}/${item}`;
    this.router.navigate([url]);
}

}
