import { Routes, RouterModule } from '@angular/router';
import {LinhaDoTempoComponent} from './linha-do-tempo/linha-do-tempo.component'
import {CriarpostComponent} from './criarpost/criarpost.component'

const APP_ROUTES: Routes = [
    {path:"", redirectTo:"/linhadotempo", pathMatch:"full"},
    {path:"linhadotempo", component: LinhaDoTempoComponent },
    {path:"criarpost", component: CriarpostComponent}
]
export const routing = RouterModule.forRoot (APP_ROUTES);