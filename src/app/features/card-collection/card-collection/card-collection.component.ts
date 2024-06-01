import { Component, inject } from '@angular/core';
import { AsyncPipe, JsonPipe } from '@angular/common';

import { Store } from '@ngrx/store';
import { IAppState } from '../../../core/store/card-collection.reducer';
import { selectData } from '../../../core/store/card-collection.selector';

import { Observable } from 'rxjs';

import { collectionCard } from '../../../core/interfaces/collection.interface';
import { CollectionFilterComponent } from '../../../core/components/collection-filter/collection-filter.component';
import { CollectionListComponent } from '../../../core/components/collection-list/collection-list.component';
import { SpinnerComponent } from '../../../core/components/spinner/spinner.component';

@Component({
  selector: 'app-card-collection',
  standalone: true,
  imports: [
    CollectionFilterComponent,
    CollectionListComponent,
    AsyncPipe,
    JsonPipe,
    SpinnerComponent
  ],
  providers: [],
  templateUrl: './card-collection.component.html',
  styleUrl: './card-collection.component.scss',
})
export class CardCollectionComponent {
  private store = inject(Store<IAppState>);

  list$!: Observable<collectionCard[] | null>;

  ngOnInit() {
    this.list$ = this.store.select(selectData);
  }
}
