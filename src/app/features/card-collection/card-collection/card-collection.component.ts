import { MatInputModule } from '@angular/material/input';
import { Component } from '@angular/core';
import { CollectionFilterComponent } from '../../../core/components/collection-filter/collection-filter.component';
import { CollectionListComponent } from '../../../core/components/collection-list/collection-list.component';
import { Observable, map, take } from 'rxjs';
import { select, Store, StoreRootModule } from '@ngrx/store';
import { IAppState } from '../../../core/store/card-collection.reducer';
import { selectAppState, selectData, selectFilters } from '../../../core/store/card-collection.selector';
import { CollectionsService } from '../../../core/services/collections.service';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { collectionCard } from '../../../core/interfaces/collection.interface';

@Component({
  selector: 'app-card-collection',
  standalone: true,
  imports: [CollectionFilterComponent, CollectionListComponent, AsyncPipe, JsonPipe, StoreRootModule],
  providers: [CollectionsService],
  templateUrl: './card-collection.component.html',
  styleUrl: './card-collection.component.scss'
})
export class CardCollectionComponent {
  data$!: Observable<any[] | null> ;
  filters$!: Observable<any>;
  list$!: Observable<collectionCard[]| null> ; ;
  constructor(
    private store: Store<IAppState>,
    private CollectionsService: CollectionsService,

  ){
    this.list$ =this.store.select((state) => {return state.collectionCard});
  }

  ngOnInit() {
    this.callMethod()
    this.store.select(selectData).pipe(take(1)).subscribe({next:(res) => {console.log('res', res)}} );
  }

  callMethod(){
    //  this.list$ = this.store.select(selectData);
    this.list$ =this.store.select((state) => {return state.collectionCard});
    // this.list$ =this.store.select(selectData).subscribe();
    console.log(' log',this.list$);
  }


}


// {
//   "collectionCard": {
//       "list": [
//           {
//               "code": "10E",
//               "name": "Tenth Edition",
//               "type": "core",
//               "releaseDate": "2007-07-13",
//               "block": "Core Set",
//               "onlineOnly": false
//           },
//           {
//               "code": "2ED",
//               "name": "Unlimited Edition",
//               "type": "core",
//               "booster": [
//                   "rare",
//                   "uncommon",
//                   "uncommon",
//                   "uncommon",
//                   "common",
//                   "common",
//                   "common",
//                   "common",
//                   "common",
//                   "common",
//                   "common",
//                   "common",
//                   "common",
//                   "common",
//                   "common"
//               ],
//               "releaseDate": "1993-12-01",
//               "block": "Core Set",
//               "onlineOnly": false
//           },
//           {
//               "code": "2X2",
//               "name": "Double Masters 2022",
//               "type": "masters",
//               "releaseDate": "2022-07-08",
//               "onlineOnly": false
//           },
//           {
//               "code": "2XM",
//               "name": "Double Masters",
//               "type": "masters",
//               "releaseDate": "2020-08-07",
//               "onlineOnly": false
//           },
//           {
//               "code": "30A",
//               "name": "30th Anniversary Edition",
//               "type": "memorabilia",
//               "releaseDate": "2022-11-28",
//               "onlineOnly": false
//           },
//           {
//               "code": "3ED",
//               "name": "Revised Edition",
//               "type": "core",
//               "booster": [
//                   "rare",
//                   "uncommon",
//                   "uncommon",
//                   "uncommon",
//                   "common",
//                   "common",
//                   "common",
//                   "common",
//                   "common",
//                   "common",
//                   "common",
//                   "common",
//                   "common",
//                   "common",
//                   "common"
//               ],
//               "releaseDate": "1994-04-11",
//               "block": "Core Set",
//               "onlineOnly": false
//           },
//           {
//               "code": "40K",
//               "name": "Warhammer 40,000 Commander",
//               "type": "commander",
//               "releaseDate": "2022-10-07",
//               "block": "Commander",
//               "onlineOnly": false
//           },
//           {
//               "code": "4BB",
//               "name": "Fourth Edition Foreign Black Border",
//               "type": "core",
//               "releaseDate": "1995-04-01",
//               "onlineOnly": false
//           },
//           {
//               "code": "4ED",
//               "name": "Fourth Edition",
//               "type": "core",
//               "booster": [
//                   "rare",
//                   "uncommon",
//                   "uncommon",
//                   "uncommon",
//                   "common",
//                   "common",
//                   "common",
//                   "common",
//                   "common",
//                   "common",
//                   "common",
//                   "common",
//                   "common",
//                   "common",
//                   "common"
//               ],
//               "releaseDate": "1995-04-01",
//               "block": "Core Set",
//               "onlineOnly": false
//           },
//           {
//               "code": "5DN",
//               "name": "Fifth Dawn",
//               "type": "expansion",
//               "releaseDate": "2004-06-04",
//               "block": "Mirrodin",
//               "onlineOnly": false
//           },
//           {
//               "code": "5ED",
//               "name": "Fifth Edition",
//               "type": "core",
//               "releaseDate": "1997-03-24",
//               "block": "Core Set",
//               "onlineOnly": false
//           },
//           {
//               "code": "6ED",
//               "name": "Classic Sixth Edition",
//               "type": "core",
//               "releaseDate": "1999-04-21",
//               "block": "Core Set",
//               "onlineOnly": false
//           },
//           {
//               "code": "7ED",
//               "name": "Seventh Edition",
//               "type": "core",
//               "releaseDate": "2001-04-11",
//               "block": "Core Set",
//               "onlineOnly": false
//           },
//           {
//               "code": "8ED",
//               "name": "Eighth Edition",
//               "type": "core",
//               "releaseDate": "2003-07-28",
//               "block": "Core Set",
//               "onlineOnly": false
//           },
//           {
//               "code": "9ED",
//               "name": "Ninth Edition",
//               "type": "core",
//               "releaseDate": "2005-07-29",
//               "block": "Core Set",
//               "onlineOnly": false
//           },
//           {
//               "code": "A25",
//               "name": "Masters 25",
//               "type": "masters",
//               "releaseDate": "2018-03-16",
//               "onlineOnly": false
//           },
//           {
//               "code": "AAFR",
//               "name": "Adventures in the Forgotten Realms Art Series",
//               "type": "memorabilia",
//               "releaseDate": "2021-07-23",
//               "onlineOnly": false
//           },
//           {
//               "code": "ABRO",
//               "name": "The Brothers' War Art Series",
//               "type": "memorabilia",
//               "releaseDate": "2022-11-18",
//               "onlineOnly": false
//           },
//           {
//               "code": "ACLB",
//               "name": "Battle for Baldur's Gate Art Series",
//               "type": "memorabilia",
//               "releaseDate": "2022-06-10",
//               "onlineOnly": false
//           },
//           {
//               "code": "ACMM",
//               "name": "Commander Masters Art Series",
//               "type": "memorabilia",
//               "releaseDate": "2023-08-04",
//               "onlineOnly": false
//           },
//           {
//               "code": "ACR",
//               "name": "Assassin's Creed",
//               "type": "draft_innovation",
//               "releaseDate": "2024-07-05",
//               "onlineOnly": false
//           },
//           {
//               "code": "ADMU",
//               "name": "Dominaria United Art Series",
//               "type": "memorabilia",
//               "releaseDate": "2022-09-09",
//               "onlineOnly": false
//           },
//           {
//               "code": "AER",
//               "name": "Aether Revolt",
//               "type": "expansion",
//               "releaseDate": "2017-01-20",
//               "block": "Kaladesh",
//               "onlineOnly": false
//           },
//           {
//               "code": "AFC",
//               "name": "Forgotten Realms Commander",
//               "type": "commander",
//               "releaseDate": "2021-07-23",
//               "block": "Commander",
//               "onlineOnly": false
//           },
//           {
//               "code": "AFR",
//               "name": "Adventures in the Forgotten Realms",
//               "type": "expansion",
//               "releaseDate": "2021-07-23",
//               "onlineOnly": false
//           },
//           {
//               "code": "AJMP",
//               "name": "Jumpstart Arena Exclusives",
//               "type": "starter",
//               "releaseDate": "2020-07-17",
//               "onlineOnly": true
//           },
//           {
//               "code": "AKH",
//               "name": "Amonkhet",
//               "type": "expansion",
//               "releaseDate": "2017-04-28",
//               "block": "Amonkhet",
//               "onlineOnly": false
//           },
//           {
//               "code": "AKHM",
//               "name": "Kaldheim Art Series",
//               "type": "memorabilia",
//               "releaseDate": "2021-02-05",
//               "onlineOnly": false
//           },
//           {
//               "code": "AKR",
//               "name": "Amonkhet Remastered",
//               "type": "masters",
//               "releaseDate": "2020-08-13",
//               "onlineOnly": true
//           },
//           {
//               "code": "ALA",
//               "name": "Shards of Alara",
//               "type": "expansion",
//               "releaseDate": "2008-10-03",
//               "block": "Alara",
//               "onlineOnly": false
//           }
//       ]
//   },
//   "filters": "?block=Ixalan"
// }
