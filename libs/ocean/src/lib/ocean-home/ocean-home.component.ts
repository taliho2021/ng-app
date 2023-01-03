import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from '@ng-app/material'

@Component({
  selector: 'ng-app-ocean-home',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './ocean-home.component.html',
  styleUrls: ['./ocean-home.component.scss'],
})
export class OceanHomeComponent {
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
}
