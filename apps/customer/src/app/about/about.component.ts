import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from "@ng-app/layout";

@Component({
    selector: 'ng-app-about',
    standalone: true,
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
    imports: [CommonModule, SidenavComponent]
})
export class AboutComponent {}
