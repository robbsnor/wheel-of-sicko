import { Component, OnInit } from '@angular/core';
import { WheelService } from 'src/app/wheel.service';

@Component({
    selector: 'app-wheel',
    templateUrl: './wheel.component.html',
    styleUrls: ['./wheel.component.scss']
})
export class WheelComponent implements OnInit {

    public title: string = '';
    public list: string[] = [];

    constructor(
        private wheelService: WheelService
    ) {}

    ngOnInit(): void {
        this.getList();
        this.wheelService.sharedTitle.subscribe(title => this.title = title)
    }

    getList():void {

        this.wheelService.getList().subscribe(list => {
            this.list = list;
        })
    }
}
