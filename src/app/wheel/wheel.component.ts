import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/list.service';

@Component({
    selector: 'app-wheel',
    templateUrl: './wheel.component.html',
    styleUrls: ['./wheel.component.scss']
})
export class WheelComponent implements OnInit {

    public list: string[] = [];

    constructor(
        private listService: ListService
    ) {}

    ngOnInit(): void {
        this.getList();
    }

    getList():void {

        this.listService.getList().subscribe(list => {
            this.list = list;
        })
    }
}
