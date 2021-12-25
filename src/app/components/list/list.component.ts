import { Component, OnInit } from '@angular/core';
import { WheelService } from 'src/app/wheel.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
    public title: string = '';
    public list: string[] = [];

    constructor(
        private wheelService: WheelService
    ) {}

    ngOnInit(): void {
        this.wheelService.title.subscribe(title => this.title = title)

        this.wheelService.getList().subscribe(list => {
            this.list = list;
        });
    }

    setTitle(newTitle: string) {
        this.wheelService.setTitle(newTitle);
    }

    addItem(item: string): void {
        this.wheelService.addItem(item);
    }

    deleteItem(item: string): void {
        this.wheelService.removeItem(item)
    }
}
