import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PersonService } from './_services/person.service';
import { HttpClientModule } from '@angular/common/http';
import { DetailedComponent } from './detailed/detailed.component';
import { EditComponent } from './edit/edit.component';
import { PersonDetailResolver } from './_resolver/persondetailedresolver.resolver';
import { HomeResolver } from './_resolver/homeresolver.resolver';
import { PersonEditResolver } from './_resolver/personeditresolver.resolver';
import { CreateComponent } from './create/create.component';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      DetailedComponent,
      EditComponent,
      CreateComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule
   ],
   providers: [
      PersonService,
      HomeResolver,
      PersonDetailResolver,
      PersonEditResolver
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
