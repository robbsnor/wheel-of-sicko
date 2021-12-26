import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { WheelComponent } from './components/wheel/wheel.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import { IconsModule } from './modules/icons/icons.module';
import { IndexComponent } from './pages/index/index.component';
import { AboutComponent } from './pages/about/about.component';
import { BackgroundPickerComponent } from './components/background-picker/background-picker.component';
import { ConfettiComponent } from './pages/confetti/confetti.component';

const appRoutes: Routes = [
    { path: '', component: IndexComponent },
    { path: 'about', component: AboutComponent },
    { path: 'confetti', component: ConfettiComponent },
    { path: '**',  redirectTo: '' }
];

@NgModule({
    declarations: [
        AppComponent,
        ListComponent,
        WheelComponent,
        DrawerComponent,
        IndexComponent,
        AboutComponent,
        BackgroundPickerComponent,
        ConfettiComponent
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
