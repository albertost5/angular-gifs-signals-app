import { Component } from '@angular/core';
import {
  GifsSideMenuHeaderComponent
} from '@gifs/components/gifs-side-menu/gifs-side-menu-header/gifs-side-menu-header.component';
import {
  GifsSideMenuOptionsComponent
} from '@gifs/components/gifs-side-menu/gifs-side-menu-options/gifs-side-menu-options.component';

@Component({
  selector: 'app-gifs-side-menu',
  imports: [
    GifsSideMenuHeaderComponent,
    GifsSideMenuOptionsComponent
  ],
  templateUrl: './gifs-side-menu.component.html',
  standalone: true,
  styles: ``
})
export class GifsSideMenuComponent {

}
