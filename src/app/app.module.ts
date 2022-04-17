import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsdComponent } from './usd/usd.component';
import { YenComponent } from './yen/yen.component';

@NgModule({
  declarations: [
    AppComponent,
    UsdComponent,
    YenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
