import { Component } from '@angular/core';
import { CommentCardComponent } from './components/comment-card/comment-card.component';

@Component({
  selector: 'app-comments-section',
  standalone: true,
  imports: [CommentCardComponent],
  templateUrl: './comments-section.component.html',
  styleUrl: './comments-section.component.scss'
})
export class CommentsSectionComponent {

}
