import { Component, OnInit } from '@angular/core';
import { Background } from 'src/app/models/wheel.model';
import { WheelService } from 'src/app/wheel.service';

@Component({
    selector: 'sicko-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
    public title: string = '';
    public wheelItems: string[] = [];

    constructor(
        private wheelService: WheelService
    ) {}

    ngOnInit(): void {
        this.getTitle();
        this.getWheelList();
    }

    getTitle(): void {
        this.wheelService.title.subscribe(title => this.title = title);
    }

    setTitle(newTitle: string): void {
        this.wheelService.setTitle(newTitle);
    }

    getWheelList(): void {
        this.wheelService.wheelItems.subscribe(wheelItems => this.wheelItems = wheelItems);
    }

    addWheelItem(item: string): void {
        this.wheelService.addWheelItem(item);
    }

    deleteWheelItem(item: string): void {
        console.log(item);

        this.wheelService.deleteWheelItem(item);
    }

    editItem(i: number, newValue: string): void  {
        this.wheelService.editItem(i, newValue);
    }

    trackByFn(index: number): number {
        return index;
    }
}
