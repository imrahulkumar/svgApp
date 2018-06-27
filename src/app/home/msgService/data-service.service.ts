import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
@Injectable()
export class DataServiceService {
  private messageSource = new BehaviorSubject("default message");
  currentMessage = this.messageSource.asObservable();
  constructor() {}

  changeMessage(message: any) {
    this.messageSource.next(message);
  }
}

// 1) for configuring the message service just copy this file and put in provide in module.

// 2) for using it just import it to any component and use that in constructor

// 3)for sending message
//  this.data.changeMessage(res);

//  4) for reciving message
//   this.data.currentMessage.subscribe(message => this.message = message);
//   console.log("register component",this.message);