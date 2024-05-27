import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { CollectionsService } from './core/services/collections.service';
import { Store, StoreModule, StoreRootModule } from '@ngrx/store';
import { dataReducer } from './core/store/card-collection.reducer';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,
  ],
    providers: [

    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'magic-card-packs';
}
