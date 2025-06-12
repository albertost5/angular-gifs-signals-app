import {Component, input} from '@angular/core';

@Component({
  selector: 'app-gif-list-item',
  imports: [],
  templateUrl: './gif-list-item.component.html',
  standalone: true,
  styles: ``
})
export class GifListItemComponent {
  imgUrl = input.required<string>();
}
