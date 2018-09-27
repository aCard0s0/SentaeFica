import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'team', component: TeamComponent },
    { path: 'contacts', component: ContactComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {  }