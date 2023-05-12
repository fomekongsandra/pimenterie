import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import{HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PimentIndexComponent } from './piment-index/piment-index.component';
import { PimentDetailsComponent } from './piment-details/piment-details.component';
import { PimentAddComponent } from './piment-add/piment-add.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { CommentaireComponent } from './commentaire/commentaire.component';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { ParticulierComponent } from './particulier/particulier.component';

@NgModule({
  declarations: [
    AppComponent,
    PimentIndexComponent,
    PimentDetailsComponent,
    PimentAddComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    CommentaireComponent,
    EntrepriseComponent,
    ParticulierComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
