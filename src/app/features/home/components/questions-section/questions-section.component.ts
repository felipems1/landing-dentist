import { Component, signal } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-questions-section',
  standalone: true,
  imports: [MatExpansionModule],
  templateUrl: './questions-section.component.html',
  styleUrl: './questions-section.component.scss'
})
export class QuestionsSectionComponent {
  public readonly panelOpenState = signal(false);
}
