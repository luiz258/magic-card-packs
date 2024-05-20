import { Component, Input } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Observable } from 'rxjs';
import { CollectionsService } from '../../services/collections.service';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../../store/card-collection.reducer';
import { selectData, selectFilters } from '../../store/card-collection.selector';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-collection-list',
  standalone: true,
  imports: [CardComponent, CommonModule ],
  providers: [],
  templateUrl: './collection-list.component.html',
  styleUrl: './collection-list.component.scss'
})
export class CollectionListComponent {
  data$!: Observable<any[] | null> ;
@Input() data!: any;

constructor(  private store: Store<IAppState>,){
 this.data$ = this.store.select(selectData);
}
}
