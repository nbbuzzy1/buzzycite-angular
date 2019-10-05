import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppComponent } from './app.component';
import { AbbreviateTermComponent } from './pages/abbreviate-term/abbreviate-term.component';
import { CustomCitationComponent } from './pages/custom-citation/custom-citation.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { AuthComponent } from './auth/auth.component';
import { Inputs } from './services/inputs.service';
import { AbbreviateService } from './inputs/add-parties/abbreviate.service';
import { CitationService } from './services/citation.service';
import { FirebaseService } from './services/firebase.service';
import { AuthGuard } from './auth/auth.guard';
import { AppRoutingModule } from './app-routing.module';
import { InputsModule } from './inputs/inputs.module';
import { CourtsModule } from './courts/courts.module';
import { SharedModule } from './shared.module';
import { CitationModule } from './citation/citation.module';
import { CitationListModule } from './pages/citation-list/citation-list.module';

const config = {
  apiKey: 'AIzaSyASV6YoOKhpbJuaXWreOuisDS_8Qy9HKsQ',
  authDomain: 'buzzycite-angular.firebaseapp.com',
  databaseURL: 'https://buzzycite-angular.firebaseio.com',
  projectId: 'buzzycite-angular',
  storageBucket: 'buzzycite-angular.appspot.com',
  messagingSenderId: '168647313287',
  appId: '1:168647313287:web:fea2b30ef32ce5a0'
};

@NgModule({
  declarations: [
    AppComponent,
    AbbreviateTermComponent,
    CustomCitationComponent,
    DashboardPageComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    HttpClientModule,
    InputsModule,
    CourtsModule,
    CitationModule,
    CitationListModule,
    SharedModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
  ],
  providers: [Inputs, AbbreviateService, CitationService, FirebaseService, AuthGuard],
  bootstrap: [AppComponent],
})

export class AppModule { }
