import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { HeaderComponent } from './trangchu/header/header.component';
import { MenuComponent } from './trangchu/menu/menu.component';
import { FooterComponent } from './trangchu/footer/footer.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./trangchu/trangchu.module').then(m=> m.TrangchuModule)
  }
]

@NgModule({
  declarations: [
    AppComponent,
    TrangchuComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
