import {Component, inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {toSignal} from '@angular/core/rxjs-interop';
import {JsonPipe} from '@angular/common';
import {map} from 'rxjs';
import {GifsService} from '../../services/gifs.service';
import {GifListComponent} from '@gifs/components/gif-list/gif-list.component';

@Component({
  selector: 'app-gif-history',
  imports: [
    GifListComponent
  ],
  templateUrl: './gif-history.component.html',
  standalone: true,
  styles: ``
})
export default class GifHistoryComponent {
  gifsService = inject(GifsService);
  activatedRoute = inject(ActivatedRoute);
  query = toSignal(this.activatedRoute.params.pipe(
    map( params => params['query'].toLocaleLowerCase())
  ));
}
