import {GiphyItem} from '../gifs/interfaces/gif-response.interface';
import {Gif} from '../gifs/interfaces/gif.interface';

export class GifsHelper {
  static transformToGif(gifList: GiphyItem[]): Gif[] {
    return gifList.map(gif => ({
      id: gif.id,
      title: gif.title,
      url: gif.images.original.url
    } as Gif))
  }
}

