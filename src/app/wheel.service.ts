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
        'Pannekoek',
        'Tepel Likker',
        'Danny',
        'Die man van Waku Waku'
    ]);

    public backgrounds: Background[] = [
        {
            image: 'sicko.jpg',
            thumbnail: 'sicko-thumbnail.jpg',
            type: 'animated'
        },
        {
            image: 'sicko-black.jpg',
            thumbnail: 'sicko-black-thumbnail.jpg',
            type: 'animated'
        },
        {
            image: 'black.jpg',
            thumbnail: 'black.jpg',
            type: 'static'
        },
        {
            image: 'bank.png',
            thumbnail: 'bank.png',
            type: 'static'
        },
        {
            image: 'Wizzy-Woppy.jpg',
            thumbnail: 'Wizzy-Woppy.jpg',
            type: 'static'
        }
    ]

    public activeBackground = new BehaviorSubject<Background>(
        {
            image: 'sicko.jpg',
            thumbnail: 'sicko-thumbnail.jpg',
            type: 'animated'
        }
    )

    constructor() {}

    setTitle(title: string): void {
        this.title.next(title);
    }

    resetTitle(): void {
        this.title.next(this.defaultTitle);
    }

    addWheelItem(item: string): void {
        if (this.wheelItems.getValue().includes(item)) {
            return;
        }

        this.wheelItems.next(this.wheelItems.getValue().concat(item));
    }

    deleteWheelItem(item: string): void {
        const newWheelItems: string[] = this.wheelItems.getValue();

        newWheelItems.forEach((originalWheelItem, index) => {
          if (originalWheelItem === item) { newWheelItems.splice(index, 1); }
        });

        this.wheelItems.next(newWheelItems);
    }

    setBackground(newBackground: Background): void {
        this.activeBackground.next(newBackground);

    }
}
