import {inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GifResponse} from '../interfaces/gif-response.interface';
import {environment} from '../../../environments/environment';
import {Gif} from '../interfaces/gif.interface';
import {map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  constructor() {
    this.loadTrendingGifs();
  }

  http = inject(HttpClient);
  trendingGifs = signal<Gif[]>([]);
  trendigGifsLoading = signal<boolean>(true);

  loadTrendingGifs() {
    this.http.get<GifResponse>(`${environment.GIPHY_URL}/gifs/trending`, {
      params: {
        api_key: environment.API_KEY_GIPHY,
        limit: 20
      }
    }).pipe(
      map(({data}) =>
        data.map(gif => ({
          id: gif.id,
          title: gif.title,
          url: gif.images.original.url
        } as Gif))
      )
    ).subscribe((gifs) => {
      console.log('gifs => ', gifs);
      this.trendingGifs.set(gifs);
      this.trendigGifsLoading.set(false);
    });
  }
}
