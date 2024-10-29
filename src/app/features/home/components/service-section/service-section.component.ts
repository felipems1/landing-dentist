import { Component } from '@angular/core';
import { ServiceCardComponent } from './components/service-card/service-card.component';

@Component({
  selector: 'app-service-section',
  standalone: true,
  imports: [ServiceCardComponent],
  templateUrl: './service-section.component.html',
  styleUrl: './service-section.component.scss'
})
export class ServiceSectionComponent {

}
