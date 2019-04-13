import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SupremePostComponent } from './courts/supreme-post/supreme-post.component';
import { AddPartiesComponent } from './inputs/add-parties/add-parties.component';
import { AddRegionalVolumeComponent } from './inputs/add-regional-volume/add-regional-volume.component';
import { AddOhioVolumeComponent } from './inputs/add-ohio-volume/add-ohio-volume.component';
import { AddWebciteComponent } from './inputs/add-webcite/add-webcite.component';
import { AddPinpointComponent } from './inputs/add-pinpoint/add-pinpoint.component';
import { AddYearComponent } from './inputs/add-year/add-year.component';

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
    AddYearComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
