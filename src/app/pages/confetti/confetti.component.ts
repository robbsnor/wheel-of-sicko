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
        const colors = ['#ffd900', '#ff002b', '#ffffff'];
        const duration = 10 * 1000;
        const end = Date.now() + duration;

        const myConfetti = confetti.create(this.ConfettiCanvas, {
            resize: true,
            useWorker: true
        });

        (function frame() {
            myConfetti({
              particleCount: colors.length,
              angle: 60,
              spread: 55,
              origin: { x: 0 },
              colors: colors
            });
            myConfetti({
              particleCount: colors.length,
              angle: 120,
              spread: 55,
              origin: { x: 1 },
              colors: colors
            });

            if (Date.now() < end) {
              requestAnimationFrame(frame);
            }
          }());
    }
}
