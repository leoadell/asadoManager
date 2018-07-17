import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AsadoListComponent } from './asado-list/asado-list.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AsadoAddComponent } from './asado-add/asado-add.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { routingModule } from './app.routing';
import { AsadoItemComponent } from './asado-item/asado-item.component';
import {AngularFireAuthModule} from 'angularfire2/auth';

@NgModule({
  declarations: [
    AppComponent,
    AsadoListComponent,
    DashboardComponent,
    AsadoAddComponent,
    LoginComponent,
    RegisterComponent,
    AsadoItemComponent,
  ],
  imports: [
    routingModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireAuthModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyA5VJQYYOBZZU7fwe9TaFLWX85UqSPPHVs",
      authDomain: "asadoproject.firebaseapp.com",
      databaseURL: "https://asadoproject.firebaseio.com",
      projectId: "asadoproject",
      storageBucket: "",
      messagingSenderId: "617593602150"
    }),
    AngularFirestoreModule.enablePersistence(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
