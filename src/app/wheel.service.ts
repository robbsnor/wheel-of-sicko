import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Background } from './models/wheel.model';

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
        'pannekoek',
        'Die man van Waku Waku'
    ]);

    public backgrounds: Background[] = [
        {
            image: 'sicko.jpg',
            css: ''
        },
        {
            image: 'sicko-black.jpg',
            css: ''
        },
        {
            image: 'black.jpg',
            css: ''
        },
        {
            image: 'bank.png',
            css: ''
        },
        {
            image: 'Wizzy-Woppy.jpg',
            css: ''
        }
    ]

    public activeBackground = new BehaviorSubject<Background>(
        {
            image: 'sicko.jpg',
            css: ''
        }
    )


    constructor() {}

    setTitle(title: string): void {
        this.title.next(title);
    }

    resetTitle(): void {
        this.title.next(this.defaultTitle);
    }

    addWheelItem(item: string):void {
        if (this.wheelItems.getValue().includes(item)) {
            return;
        }

        this.wheelItems.next(this.wheelItems.getValue().concat(item));
    }

    setBackground(newBackground: Background): void {
        this.activeBackground.next(newBackground);

    }
}
