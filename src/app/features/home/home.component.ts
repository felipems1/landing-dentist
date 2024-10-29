import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ExperienceSectionComponent } from './components/experience-section/experience-section.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, ExperienceSectionComponent, ContactSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
