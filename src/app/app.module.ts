import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PhraseListComponent } from './phrase-list/phrase-list.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PhraseListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
