import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ExperienceSectionComponent } from './components/experience-section/experience-section.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { ServiceSectionComponent } from './components/service-section/service-section.component';
import { CommentsSectionComponent } from './components/comments-section/comments-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent, 
    ExperienceSectionComponent, 
    ContactSectionComponent, 
    ServiceSectionComponent,
    CommentsSectionComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
