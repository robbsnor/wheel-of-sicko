import { Component, OnInit, ViewChild } from '@angular/core';
import * as confetti from 'canvas-confetti';

@Component({
    selector: 'sicko-confetti',
    templateUrl: './confetti.component.html',
    styleUrls: ['./confetti.component.scss']
})
export class ConfettiComponent implements OnInit {
    @ViewChild('confettiCanvas') ConfettiCanvas: any;

    constructor() {}

    ngOnInit(): void {
        this.doTheConfetti();
    }

    doTheConfetti(): void {
        var colors = ['#bb0000', '#ffffff'];
        var colors = ['#ffd900', '#ff002b', '#ffffff'];

        var myConfetti = confetti.create(this.ConfettiCanvas, {
            resize: true,
            useWorker: true
        });

        myConfetti({
            particleCount: 200,
            angle: 60,
            spread: 55,
            origin: {
                x: 0
            },
            colors: colors
        });
        myConfetti({
            particleCount: 200,
            angle: 120,
            spread: 55,
            origin: {
                x: 1
            },
            colors: colors
        });
    }
}
