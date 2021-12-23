import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/list.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

    public list: string[] = [];

    constructor(
        private listService: ListService
    ) {}

    ngOnInit(): void {
        this.listService.getList().subscribe(list => {
            this.list = list;
        });
    }

    addItem(item: string): void {
        this.listService.addItem(item);
    }

    deleteItem(item: string): void {
        this.listService.removeItem(item)
    }
}
