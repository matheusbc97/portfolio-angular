import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { PlaygroundPageComponent } from './pages/playground-page/playground-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'home',  pathMatch: 'prefix', },
  {path: 'home', component: HomePageComponent, },
  {path: 'playground', component: PlaygroundPageComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
