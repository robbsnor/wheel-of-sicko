import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ListService {

    public list: string[] = [
        'Bobby',
        'Buurman en Buurman',
        'Barrel'
    ];

    constructor() {}

    getList(): Observable<string[]> {
        return of(this.list)
    }

    addItem(item: string) {
        this.list.push(item);
    }

    removeItem(item: string) {
        var index = this.list.indexOf(item);
        if (index !== -1) {
            this.list.splice(index, 1);
        }
    }
}
