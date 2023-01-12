import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
            CommonModule,
            HomeComponent,
            RouterModule.forRoot(appRoutes, {
              initialNavigation: 'enabledBlocking',
            }),
             HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
