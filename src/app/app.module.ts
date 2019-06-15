import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

//Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
// import { AngularFireStorageModule } from '@angular/fire/storage';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SupremePostComponent } from './courts/supreme-post/supreme-post.component';
import { AddPartiesComponent } from './inputs/add-parties/add-parties.component';
import { AddRegionalVolumeComponent } from './inputs/add-regional-volume/add-regional-volume.component';
import { AddOhioVolumeComponent } from './inputs/add-ohio-volume/add-ohio-volume.component';
import { AddWebciteComponent } from './inputs/add-webcite/add-webcite.component';
import { AddPinpointComponent } from './inputs/add-pinpoint/add-pinpoint.component';
import { AddYearComponent } from './inputs/add-year/add-year.component';
import { SupremePreComponent } from './courts/supreme-pre/supreme-pre.component';
import { AppealPostPrintComponent } from './courts/appeal-post-print/appeal-post-print.component';
import { AppealPostNonprintComponent } from './courts/appeal-post-nonprint/appeal-post-nonprint.component';
import { AppealPreNonprintComponent } from './courts/appeal-pre-nonprint/appeal-pre-nonprint.component';
import { AppealPrePrintComponent } from './courts/appeal-pre-print/appeal-pre-print.component';
import { AbbreviateTermComponent } from './pages/abbreviate-term/abbreviate-term.component';
import { CitationListComponent } from './pages/citation-list/citation-list.component';
import { CustomCitationComponent } from './pages/custom-citation/custom-citation.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LoadingPageComponent } from './pages/loading-page/loading-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { AddCountyComponent } from './inputs/add-county/add-county.component';
import { AddDistrictComponent } from './inputs/add-district/add-district.component';
import { AddMonthDayComponent } from './inputs/add-month-day/add-month-day.component';
import { AddOhioAppVolumeComponent } from './inputs/add-ohio-app-volume/add-ohio-app-volume.component';
import { AddWestlawLexisComponent } from './inputs/add-westlaw-lexis/add-westlaw-lexis.component';
import { CitationComponent } from './citation/citation/citation.component';
import { AppRoutingModule } from './app-routing.module';
import { CitationListItemComponent } from './pages/citation-list/citation-list-item/citation-list-item.component';
import { Citations } from './services/citations.service';
import { Inputs } from './services/inputs.service';
import { AbbreviateService } from './inputs/add-parties/abbreviate.service';
import { CitationService } from './services/citation.service';
import { SaveModalComponent } from './citation/save-modal/save-modal.component';
import { FilterPipe } from './pipes/filter.pipe';
import { SortByPipe } from './pipes/sort.pipe';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';

const config = {
  apiKey: "AIzaSyASV6YoOKhpbJuaXWreOuisDS_8Qy9HKsQ",
  authDomain: "buzzycite-angular.firebaseapp.com",
  databaseURL: "https://buzzycite-angular.firebaseio.com",
  projectId: "buzzycite-angular",
  storageBucket: "buzzycite-angular.appspot.com",
  messagingSenderId: "168647313287",
  appId: "1:168647313287:web:fea2b30ef32ce5a0"
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SupremePostComponent,
    AddPartiesComponent,
    AddRegionalVolumeComponent,
    AddOhioVolumeComponent,
    AddWebciteComponent,
    AddPinpointComponent,
    AddYearComponent,
    SupremePreComponent,
    AppealPostPrintComponent,
    AppealPostNonprintComponent,
    AppealPreNonprintComponent,
    AppealPrePrintComponent,
    AbbreviateTermComponent,
    CitationListComponent,
    CustomCitationComponent,
    DashboardPageComponent,
    LoginPageComponent,
    LoadingPageComponent,
    NotFoundPageComponent,
    AddCountyComponent,
    AddDistrictComponent,
    AddMonthDayComponent,
    AddOhioAppVolumeComponent,
    AddWestlawLexisComponent,
    CitationComponent,
    CitationListItemComponent,
    SaveModalComponent,
    FilterPipe,
    SortByPipe,
    AuthComponent,
    // AuthComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    HttpClientModule,

    //Firebase
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    // AngularFireStorageModule // storage
  ],
  providers: [Citations, Inputs, AbbreviateService, CitationService, AuthGuard],
  bootstrap: [AppComponent],
  entryComponents: [SaveModalComponent]
})
export class AppModule { }