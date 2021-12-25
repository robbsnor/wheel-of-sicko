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
    public backgrounds: Background[] = [];

    constructor(
        private wheelService: WheelService
    ) {}

    ngOnInit(): void {
        this.getTitle();
        this.getWheelList();
        this.getBackgrounds();
    }

    getTitle(): void {
        this.wheelService.title.subscribe(title => this.title = title);
    }

    setTitle(newTitle: string) {
        this.wheelService.setTitle(newTitle);
    }

    getWheelList(): void {
        this.wheelService.wheelItems.subscribe(wheelItems => this.wheelItems = wheelItems);
    }

    addWheelItem(item: string): void {
        this.wheelService.addWheelItem(item);
    }

    getBackgrounds(): void {
        this.backgrounds = this.wheelService.backgrounds;
    }

    setBackground(newBackground: Background){
        this.wheelService.setBackground(newBackground);
    }
}
