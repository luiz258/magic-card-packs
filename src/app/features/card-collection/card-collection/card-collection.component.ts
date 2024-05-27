import { MatInputModule } from '@angular/material/input';
import { Component } from '@angular/core';
import { CollectionFilterComponent } from '../../../core/components/collection-filter/collection-filter.component';
import { CollectionListComponent } from '../../../core/components/collection-list/collection-list.component';
import { Observable, map } from 'rxjs';
import { Store } from '@ngrx/store';
import { IAppState } from '../../../core/store/card-collection.reducer';
import { selectAppState, selectData, selectFilters } from '../../../core/store/card-collection.selector';
import { CollectionsService } from '../../../core/services/collections.service';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-collection',
  standalone: true,
  imports: [CollectionFilterComponent, CollectionListComponent, AsyncPipe, JsonPipe],
  providers: [CollectionsService],
  templateUrl: './card-collection.component.html',
  styleUrl: './card-collection.component.scss'
})
export class CardCollectionComponent {
  data$!: Observable<any[] | null> ;
  filters$!: Observable<any>;
  list$!: Observable<any> ; ;
  constructor(
    private store: Store<IAppState>,
    private CollectionsService: CollectionsService,

  ){}
  ngOnInit() {
    this.callMethod()
  }

  callMethod(){

   this.list$ = this.store.select(selectData);

    console.log(this.list$);
  }


}
