import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class WheelService {

    private title = new BehaviorSubject('First Message');
    title$ = this.title.asObservable();

    public list: string[] = [
        'Bobby',
        'Buurman en Buurman',
        'Barrel'
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

        this.list.push(item);
    }

    removeItem(item: string) {
        var index = this.list.indexOf(item);
        if (index !== -1) {
            this.list.splice(index, 1);
        }
    }
}
