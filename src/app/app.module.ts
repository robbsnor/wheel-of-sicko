import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { WheelComponent } from './components/wheel/wheel.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import { IconsModule } from './modules/icons/icons.module';

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
export class AppModule {}
