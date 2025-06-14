import {Component, input} from '@angular/core';
import {GifListItemComponent} from '@gifs/components/gif-list/gif-list-item/gif-list-item.component';
import {Gif} from '../../interfaces/gif.interface';

@Component({
  selector: 'app-gif-list',
  imports: [
    GifListItemComponent
  ],
  templateUrl: './gif-list.component.html',
  standalone: true,
  styles: ``
})
export class GifListComponent {
  gifsList = input.required<Gif[]>();
}
