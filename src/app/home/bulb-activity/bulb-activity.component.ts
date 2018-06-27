import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Router, ActivatedRoute, Params } from "@angular/router";
import {
  NgRedux,
  DevToolsExtension,
  NgReduxModule,
  select
} from "@angular-redux/store";
import { IAppState } from "../../store";
import { DataServiceService } from "../msgService/data-service.service";
@Component({
  selector: "app-bulb-activity",
  templateUrl: "./bulb-activity.component.html",
  styleUrls: ["./bulb-activity.component.css"]
})
export class BulbActivityComponent implements OnInit {
  movingCoordinates: any[] = [
    {
      x: 0,
      y: 0
    }
  ];
  @select() counter;
  payload: string = "ON";
  bulb: boolean = false;
  bulbon: any = "assets/img/bulb.svg";
  bulboff: any = "assets/img/bulboff.svg";
  i: any; //for the index number
  item: any; //for the on/off status

  xaxis: number = 50; //static data
  yaxis: number = 109; //static data

  mxaxis: number = 70; //moving data
  myaxis: number = 54; //moving data

  message: any;
  x: any;
  y: any;

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private activatedRoute: ActivatedRoute,
    private data: DataServiceService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.i = params["i"];
      this.item = params["item"];
      this.x = params["x"];
      this.y = params["y"];
      console.log("i =", this.i);
      console.log("item =", this.item);
      this.RefreshSatus(this.item, this.i);
      this.data.currentMessage.subscribe(message => (this.message = message));
      console.log("register component", this.message);
    });
    this.data.currentMessage.subscribe(message => (this.message = message));
  }
  switch() {
    let array: any[];
    this.bulb = !this.bulb;
    var datai = { x: this.mxaxis, y: this.myaxis };
    this.movingCoordinates.push(datai);
    this.data.changeMessage(this.movingCoordinates);
    if (this.bulb == true) {
      this.payload = "ON";
      this.ngRedux.dispatch({ type: "ON", payload: this.payload });
    } else {
      this.payload = "OFF";
      this.ngRedux.dispatch({ type: "OFF", payload: this.payload });
    }
    console.log("heymy", array);
  }

  RefreshSatus(item, i) {
    // console.log("i console", this.message(i));
    //this.xaxis = this.x;
   // this.yaxis = this.y;
    if (item == "ON") {
      this.bulb = true;
      //    this.xaxis = this.x;
      //    this.yaxis = this.y;
    } else {
      this.bulb = false;
      //    this.xaxis = this.x;
      //    this.yaxis = this.y;
    }
  }

  onMoving(e) {
    this.mxaxis = e.x;
    this.myaxis = e.y;
      this.xaxis = this.mxaxis;
    this.yaxis = this.myaxis;
   // console.log(this.mxaxis);
  }
  position() {
    //console.log(this.movingCoordinates);
    this.xaxis = this.x;
   this.yaxis = this.y;
  }
}
