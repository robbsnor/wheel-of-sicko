import { Component, OnInit } from '@angular/core';
import { WheelService } from 'src/app/wheel.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

    public list: string[] = [];

    constructor(
        private wheelService: WheelService
    ) {}

    ngOnInit(): void {
        this.wheelService.getList().subscribe(list => {
            this.list = list;
        });
    }

    addItem(item: string): void {
        this.wheelService.addItem(item);
    }

    deleteItem(item: string): void {
        this.wheelService.removeItem(item)
    }
}
