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
@Component({
  selector: "app-bulb-activity",
  templateUrl: "./bulb-activity.component.html",
  styleUrls: ["./bulb-activity.component.css"]
})
export class BulbActivityComponent implements OnInit {
  @select() counter;
  payload: string = "ON";
  bulb: boolean = false;
  bulbon: any = "assets/img/bulb.svg";
  bulboff: any = "assets/img/bulboff.svg";
  i: any; //for the index number
  item: any; //for the on/off status
  constructor(
    private ngRedux: NgRedux<IAppState>,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.i = params["i"];
      this.item = params["item"];
      console.log("i =", this.i);
      console.log("item =", this.item);
      this.RefreshSatus(this.item);
    });
  }
  switch() {
    this.bulb = !this.bulb;
    debugger;
    if (this.bulb == true) {
      this.payload = "ON";
      this.ngRedux.dispatch({ type: "ON", payload: this.payload });
    } else {
      this.payload = "OFF";
      this.ngRedux.dispatch({ type: "OFF", payload: this.payload });
    }
  }

  RefreshSatus(item) {
    if (item == "ON") {
      this.bulb = true;
    }
    else{
        this.bulb = false;
    }

  }
}
