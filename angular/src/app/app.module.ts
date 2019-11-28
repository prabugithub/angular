import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EntryComponentComponent } from './data-collection/entry-component/entry-component.component';
import { HeaderComponent } from './_layout/header/header.component';
import { FooterComponent } from './_layout/footer/footer.component';
import { AppLayoutComponent } from './_layout/app-layout/app-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    EntryComponentComponent,
    HeaderComponent,
    FooterComponent,
    AppLayoutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
