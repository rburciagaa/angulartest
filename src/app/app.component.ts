import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TopmenuComponent} from './components/topmenu/topmenu.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopmenuComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angulartest';
}
