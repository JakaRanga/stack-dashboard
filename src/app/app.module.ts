import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { GreetingsComponent } from './greetings/greetings.component';

@NgModule({
  declarations: [
    AppComponent,
    ServiceListComponent,
    GreetingsComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
