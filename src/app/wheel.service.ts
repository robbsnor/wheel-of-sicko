import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class WheelService {

    private defaultTitle = 'Wheel Of Sicko';
    public title = new BehaviorSubject(this.defaultTitle);
    public wheelItems = new BehaviorSubject([
        'Pino',
        'Buurman en Buurman',
        'Charmander',
        'Karbonkel',
        'Mario',
        'Luigi',
        'Kapitein koek',
        'Freek Fonk',
        'Bear Gryls',
        'Jochem Meijer',
        'Die man van Waku Waku'
    ]);

    constructor() {}

    setTitle(title: string): void {
        this.title.next(title)
    }

    resetTitle(): void {
        this.title.next(this.defaultTitle)
    }

    addWheelItem(item: string):void {
        if (this.wheelItems.getValue().includes(item)) {
            return;
        }

        this.wheelItems.next(this.wheelItems.getValue().concat(item));
    }
}
