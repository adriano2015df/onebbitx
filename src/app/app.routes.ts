import { Routes} from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { Falcon9Component } from '../pages/falcon-9/falcon-9.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'falcon-9', component: Falcon9Component}
];
