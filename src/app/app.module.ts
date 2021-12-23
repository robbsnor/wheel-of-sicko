import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { WheelComponent } from './wheel/wheel.component';
import { DrawerComponent } from './drawer/drawer.component';
import { IconsModule } from './icons/icons.module';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    WheelComponent,
    DrawerComponent
],
imports: [
    BrowserModule,
    IconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
