import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { Background } from 'src/app/models/wheel.model';
import { WheelService } from 'src/app/wheel.service';

@Component({
    selector: 'sicko-wheel',
    templateUrl: './wheel.component.html',
    styleUrls: ['./wheel.component.scss']
})
export class WheelComponent implements OnInit {

    public title: string = '';
    public wheelItems: string[] = [];
    public background: Background = {};

    constructor(
        private wheelService: WheelService
    ) {}

    ngOnInit(): void {
        this.getTitle();
        this.getWheelItems();
        this.getActiveBackground();
    }

    getTitle() {
        this.wheelService.title.subscribe(title => this.title = title);
    }

    getWheelItems() {
        this.wheelService.wheelItems.subscribe(wheelItems => this.wheelItems = wheelItems);
    }

    getActiveBackground() {
        this.wheelService.activeBackground.subscribe(background => this.background = background);
    }




}
