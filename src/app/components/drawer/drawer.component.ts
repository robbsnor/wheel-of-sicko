import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-drawer',
    templateUrl: './drawer.component.html',
    styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit {
    public drawerIsOpen = true;

    constructor() {}

    ngOnInit(): void {}

    toggleDrawer(): void {
        this.drawerIsOpen ? this.closeDrawer() : this.openDrawer();
    }

    openDrawer(): void {
        this.drawerIsOpen = true;
    }

    closeDrawer(): void {
        this.drawerIsOpen = false;
    }
}
