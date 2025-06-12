import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {GifsSideMenuComponent} from '@gifs/components/gifs-side-menu/gifs-side-menu.component';


@Component({
  selector: 'app-dashboard-page',
  imports: [
    RouterOutlet,
    GifsSideMenuComponent
  ],
  templateUrl: './dashboard-page.component.html',
  standalone: true,
  styles: ``
})
export default class DashboardPageComponent {

}
