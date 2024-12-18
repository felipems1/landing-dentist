import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [ContactInfoComponent, MatIconModule],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss',
})
export class ContactSectionComponent {

}
