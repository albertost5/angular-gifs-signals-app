import {computed, inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GifResponse} from '../interfaces/gif-response.interface';
import {environment} from '../../../environments/environment';
import {Gif} from '../interfaces/gif.interface';
import {map, Observable, tap} from 'rxjs';
import {GifsHelper} from '../../shared/gifs.helper';

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
  searchHistory = signal<Record<string, Gif[]>>({});
  searchHistoryKeys = computed(() => Object.keys(this.searchHistory()));

  loadTrendingGifs(): void {
    this.http.get<GifResponse>(`${environment.GIPHY_URL}/gifs/trending`, {
      params: {
        api_key: environment.API_KEY_GIPHY,
        limit: 20
      }
    }).pipe(
      map(({data}) =>
        GifsHelper.transformToGif(data)
      )
    ).subscribe((gifs) => {
      this.trendingGifs.set(gifs);
      this.trendigGifsLoading.set(false);
    });
  }

  searchGifs(query: string): Observable<Gif[]> {
    return this.http.get<GifResponse>(`${environment.GIPHY_URL}/gifs/search`, {
      params: {
        api_key: environment.API_KEY_GIPHY,
        limit: 20,
        q: query
      }
    }).pipe(
      map(({data}) =>
        GifsHelper.transformToGif(data)
      ),
      tap((gifs) => {
        this.searchHistory.update((history) => ({
          ...history,
          [query.toLowerCase()]: gifs
        }))
      })
    )
  }

  getHistoryGifs(query: string): Gif[] {
   return this.searchHistory()[query]
  }
}
