import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular/main';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ServiceJokesService } from './shared/service-jokes.service';
import { ChuckNorrisJokesComponent } from './chuckNorris/chuck-norris-jokes/chuck-norris-jokes.component';
import { ChuckNorrisService } from './shared/chuck-norris.service';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ChuckNorrisJokesComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents(),
HttpClientModule

  ],
  providers: [ServiceJokesService, ChuckNorrisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
