import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './core/components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomePresentationComponent } from './pages/home-page/components/sections/home-presentation/home-presentation.component';
import { HomeStacksComponent } from './pages/home-page/components/sections/home-stacks/home-stacks.component';
import { HomeProjectsComponent } from './pages/home-page/components/sections/home-projects/home-projects.component';
import { HomeContactsComponent } from './pages/home-page/components/sections/home-contacts/home-contacts.component';
import { PlaygroundPageComponent } from './pages/playground-page/playground-page.component';
import { PlaygroundSearchBarExampleComponent } from './pages/playground-page/components/sections/playground-search-bar-example/playground-search-bar-example.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    HomePresentationComponent,
    HomeStacksComponent,
    HomeProjectsComponent,
    HomeContactsComponent,
    PlaygroundPageComponent,
    PlaygroundSearchBarExampleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
