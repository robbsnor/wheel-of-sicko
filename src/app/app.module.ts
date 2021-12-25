import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { WheelComponent } from './components/wheel/wheel.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import { IconsModule } from './modules/icons/icons.module';
import { IndexComponent } from './components/index/index.component';
import { AboutComponent } from './components/about/about.component';

const appRoutes: Routes = [
    { path: '', component: IndexComponent },
    { path: 'about', component: AboutComponent },
    { path: '**',  component: IndexComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        ListComponent,
        WheelComponent,
        DrawerComponent,
        IndexComponent,
        AboutComponent
    ],
    imports: [
        BrowserModule,
        IconsModule,
        RouterModule.forRoot(
            appRoutes,
        )
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
