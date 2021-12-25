import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class WheelService {

    public title = new BehaviorSubject('Wheel Of Sicko');

    public list: string[] = [
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
    ];

    constructor() {}

    setTitle(title: string) {
        this.title.next(title)
    }

    getList(): Observable<string[]> {
        return of(this.list)
    }

    addItem(item: string) {
        if(item === '') {
            return
        }

        this.list.unshift(item);
    }

    removeItem(item: string) {
        var index = this.list.indexOf(item);
        if (index !== -1) {
            this.list.splice(index, 1);
        }
    }
}
