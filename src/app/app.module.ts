import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing} from './app.routing';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import {PostService} from './services/post.service'


import { AppComponent } from './app.component';
import { NavegadorComponent } from './navegador/navegador.component';
import { PostComponent } from './post/post.component';
import { LinhaDoTempoComponent } from './linha-do-tempo/linha-do-tempo.component';
import { CriarpostComponent } from './criarpost/criarpost.component';


@NgModule({
  declarations: [
    AppComponent,
    NavegadorComponent,
    PostComponent,
    LinhaDoTempoComponent,
    CriarpostComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
