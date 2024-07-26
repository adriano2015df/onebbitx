import { Component } from '@angular/core';
import { HeadComponent } from '../../components/head/head.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeadComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
