import { Component, OnInit } from '@angular/core';
import { WheelService } from 'src/app/wheel.service';

@Component({
    selector: 'app-list',
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
        this.getList();
    }

    getTitle(): void {
        this.wheelService.title.subscribe(title => this.title = title);
    }

    setTitle(newTitle: string) {
        this.wheelService.setTitle(newTitle);
    }

    getList(): void {
        this.wheelService.wheelItems.subscribe(wheelItems => this.wheelItems = wheelItems);
    }

    addWheelItem(item: string): void {
        this.wheelService.addWheelItem(item);
    }
}
