import { Component, OnInit } from '@angular/core';
import { Background } from 'src/app/models/wheel.model';
import { WheelService } from 'src/app/wheel.service';

@Component({
    selector: 'sicko-background-picker',
    templateUrl: './background-picker.component.html',
    styleUrls: ['./background-picker.component.scss']
})
export class BackgroundPickerComponent implements OnInit {
    public backgrounds: Background[] = [];

    constructor(
        private wheelService: WheelService
    ) {}

    ngOnInit(): void {
        this.getBackgrounds();
    }

    getBackgrounds(): void {
        this.backgrounds = this.wheelService.backgrounds;
    }

    setBackground(newBackground: Background): void {
        this.wheelService.setBackground(newBackground);
    }

}
