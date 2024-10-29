import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-contact-info',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './contact-info.component.html',
  styleUrl: './contact-info.component.scss'
})
export class ContactInfoComponent {
  public readonly icon = input.required<string>();
  public readonly title = input.required<string>();
  public readonly texts = input.required<string[]>();
}
