import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent],
  templateurl: ./ app.component.ncml >
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'blogSystem';

}