import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { fadeInScale, slideFadeIn } from '../../../../shared/animations/app-animations';

@Component({
  selector: 'app-experience-section',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './experience-section.component.html',
  styleUrl: './experience-section.component.scss',
  animations: [fadeInScale, slideFadeIn]
})
export class ExperienceSectionComponent {

}
