import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class WheelService {

    public title = new BehaviorSubject('Wheel Of Sicko');
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

    setTitle(title: string) {
        this.title.next(title)
    }

    addWheelItem(item: string):void {
        if (this.wheelItems.getValue().includes(item)) {
            return;
        }

        this.wheelItems.next(this.wheelItems.getValue().concat(item));
    }
}
