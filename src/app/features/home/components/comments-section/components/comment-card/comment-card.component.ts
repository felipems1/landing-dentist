import { Component, input } from '@angular/core';

@Component({
  selector: 'app-comment-card',
  standalone: true,
  imports: [],
  templateUrl: './comment-card.component.html',
  styleUrl: './comment-card.component.scss'
})
export class CommentCardComponent {
  public readonly user = input.required<string>()
  public readonly comment = input.required<string>()
  public readonly avatar = input.required<string>()
}
