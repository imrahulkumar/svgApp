import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from '@angular/common';
import { BulbActivityComponent } from './home/bulb-activity/bulb-activity.component';
import { LogComponent } from './home/log/log.component';

const routes: Routes = [
  { path: "", component: BulbActivityComponent },
  { path: "log", component: LogComponent },
  { path: "existActicity/:i/:item/:x/:y", component: BulbActivityComponent },
];

// existActicity/${i}/${item}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
