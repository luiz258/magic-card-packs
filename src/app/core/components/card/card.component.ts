import { Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() name!:string| null;
  @Input() block!: string | null;
  @Input() releaseDate!:string| null;



construct(){
  this.name = "Amonkhet invocation";
  this.block = "Amonkhet";
  this.releaseDate = "10/05/2024";
}
}
