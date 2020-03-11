import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CreateCachorroComponent } from './components/create-cachorro/create-cachorro.component';
import { EditCachorroComponent } from './components/edit-cachorro/edit-cachorro.component';
import { ListCachorroComponent } from './components/list-cachorro/list-cachorro.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ApiService } from './service/api.service';


@NgModule({
  declarations: [
    AppComponent,
    CreateCachorroComponent,
    EditCachorroComponent,
    ListCachorroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
