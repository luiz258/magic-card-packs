import { CommonModule} from '@angular/common';
import { Component, Input } from '@angular/core';

import { CardComponent } from '../card/card.component';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  selector: 'app-collection-list',
  standalone: true,
  imports: [
    CardComponent,
    CommonModule
  ],
  providers: [],
  templateUrl: './collection-list.component.html',
  styleUrl: './collection-list.component.scss',
})
export class CollectionListComponent {
  @Input() data!: any;

}
