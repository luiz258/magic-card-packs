import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-collection-filter',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule],
  templateUrl: './collection-filter.component.html',
  styleUrl: './collection-filter.component.scss'
})
export class CollectionFilterComponent {
blocks:String[] = ["Amonkhet", "Ixalan", "Zendikar", "Ravnica", "Onslaught"];

}
