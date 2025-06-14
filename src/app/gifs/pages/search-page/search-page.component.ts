import {Component, inject, signal} from '@angular/core';
import {GifListComponent} from '@gifs/components/gif-list/gif-list.component';
import {GifsService} from '../../service/gifs.service';
import {Gif} from '../../interfaces/gif.interface';

@Component({
  selector: 'app-search-page',
  imports: [
    GifListComponent
  ],
  templateUrl: './search-page.component.html',
  standalone: true,
  styles: ``
})
export default class SearchPageComponent {
  gifsService = inject(GifsService);
  gifs = signal<Gif[]>([]);

  onSearch(searchTerm: string) {
    this.gifsService.searchGifs(searchTerm).subscribe(gifs => this.gifs.set(gifs));
  }
}
