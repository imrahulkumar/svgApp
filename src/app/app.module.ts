import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./home/header/header.component";
import { BulbActivityComponent } from "./home/bulb-activity/bulb-activity.component";
import { LogComponent } from "./home/log/log.component";
import { AppRoutingModule } from ".//app-routing.module";
import { Ng2DraggableModule } from "ng2-draggable";
import { AngularDraggableModule } from "angular2-draggable";
import {
  NgRedux,
  DevToolsExtension,
  NgReduxModule
} from "@angular-redux/store";

import { IAppState, rootReducer ,INITIAL_STATE} from "./store";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BulbActivityComponent,
    LogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2DraggableModule,
    AngularDraggableModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 
  counter = 0;
  constructor(private ngRedux: NgRedux<IAppState>) {
   ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }

 
}
