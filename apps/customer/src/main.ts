import {importProvidersFrom} from '@angular/core';
import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app/app.routes";


bootstrapApplication(AppComponent, {
    providers:[
        importProvidersFrom(RouterModule.forRoot(appRoutes))
    ]

})
  .catch(err => console.error(err));
