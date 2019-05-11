import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';

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
import { AddRegionalAppVolumeComponent } from './inputs/add-regional-app-volume/add-regional-app-volume.component';
import { AddWestlawLexisComponent } from './inputs/add-westlaw-lexis/add-westlaw-lexis.component';
import { CitationComponent } from './citation/citation/citation.component';
import { CitationListFiltersComponent } from './citation/citation-list-filters/citation-list-filters.component';
import { AppRoutingModule } from './app-routing.module';

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
    AddRegionalAppVolumeComponent,
    AddWestlawLexisComponent,
    CitationComponent,
    CitationListFiltersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
