import { MatInputModule } from '@angular/material/input';
import { Component } from '@angular/core';
import { CollectionFilterComponent } from '../../../core/components/collection-filter/collection-filter.component';
import { CollectionListComponent } from '../../../core/components/collection-list/collection-list.component';

@Component({
  selector: 'app-card-collection',
  standalone: true,
  imports: [CollectionFilterComponent, CollectionListComponent],
  templateUrl: './card-collection.component.html',
  styleUrl: './card-collection.component.scss'
})
export class CardCollectionComponent {

}
