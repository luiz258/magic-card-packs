import { Component } from '@angular/core';
import { CardOpenComponent } from '../../../core/components/card-open/card-open.component';
import { SpinnerComponent } from '../../../core/components/spinner/spinner.component';

@Component({
  selector: 'app-open-package-list',
  standalone: true,
  imports: [CardOpenComponent, SpinnerComponent],
  templateUrl: './open-package-list.component.html',
  styleUrl: './open-package-list.component.scss'
})
export class OpenPackageListComponent {
  name: string= "";
  manaCost: string= "";
  colorIdentity: string= "";
  text: string= "";
  imageUrl: string= "";
}
