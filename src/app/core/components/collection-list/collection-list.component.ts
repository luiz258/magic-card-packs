import { Component, Input } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Observable, map, tap } from 'rxjs';
import { CollectionsService } from '../../services/collections.service';
import { Store, StoreModule, select } from '@ngrx/store';
import { IAppState } from '../../store/card-collection.reducer';
import { selectData, selectFilters } from '../../store/card-collection.selector';
import { CommonModule, NgFor, AsyncPipe } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
@Component({
  selector: 'app-collection-list',
  standalone: true,
  imports: [CardComponent, CommonModule],
  providers: [],
  templateUrl: './collection-list.component.html',
  styleUrl: './collection-list.component.scss'
})
export class CollectionListComponent {

@Input() data!: any;

constructor(  private store: Store<IAppState>){

  }
}
