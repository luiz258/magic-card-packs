import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card-open',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './card-open.component.html',
  styleUrl: './card-open.component.scss'
})
export class CardOpenComponent {
  @Input() name!: string;
  @Input() manaCost!: string;
  @Input() colorIdentity!: string;
  @Input() text!: string;
  @Input() imageUrl!: string;
}
