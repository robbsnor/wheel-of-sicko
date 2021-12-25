import { Component, OnInit } from '@angular/core';
import { WheelService } from 'src/app/wheel.service';

@Component({
    selector: 'app-wheel',
    templateUrl: './wheel.component.html',
    styleUrls: ['./wheel.component.scss']
})
export class WheelComponent implements OnInit {

    public title: string = '';
    public wheelItems: string[] = [];

    constructor(
        private wheelService: WheelService
    ) {}

    ngOnInit(): void {
        this.wheelService.title.subscribe(title => this.title = title);
        this.wheelService.wheelItems.subscribe(wheelItems => this.wheelItems = wheelItems);
    }
}
