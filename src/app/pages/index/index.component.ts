import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { WheelService } from 'src/app/wheel.service';


@Component({
    selector: 'sico-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {


    constructor(
        private wheelService: WheelService,
        private titleService:Title
    ) {
        this.wheelService.title.subscribe(title =>
            this.titleService.setTitle(title)
        )
    }

    ngOnInit(): void {}

}
