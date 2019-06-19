import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { AddPartiesComponent } from './add-parties/add-parties.component';
import { AddRegionalVolumeComponent } from './add-regional-volume/add-regional-volume.component';
import { AddOhioVolumeComponent } from './add-ohio-volume/add-ohio-volume.component';
import { AddWebciteComponent } from './add-webcite/add-webcite.component';
import { AddPinpointComponent } from './add-pinpoint/add-pinpoint.component';
import { AddYearComponent } from './add-year/add-year.component';
import { AddCountyComponent } from './add-county/add-county.component';
import { AddDistrictComponent } from './add-district/add-district.component';
import { AddMonthDayComponent } from './add-month-day/add-month-day.component';
import { AddOhioAppVolumeComponent } from './add-ohio-app-volume/add-ohio-app-volume.component';
import { AddWestlawLexisComponent } from './add-westlaw-lexis/add-westlaw-lexis.component';

@NgModule({
  declarations: [
    AddPartiesComponent,
    AddRegionalVolumeComponent,
    AddOhioVolumeComponent,
    AddWebciteComponent,
    AddPinpointComponent,
    AddYearComponent,
    AddCountyComponent,
    AddDistrictComponent,
    AddMonthDayComponent,
    AddOhioAppVolumeComponent,
    AddWestlawLexisComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    AddPartiesComponent,
    AddRegionalVolumeComponent,
    AddOhioVolumeComponent,
    AddWebciteComponent,
    AddPinpointComponent,
    AddYearComponent,
    AddCountyComponent,
    AddDistrictComponent,
    AddMonthDayComponent,
    AddOhioAppVolumeComponent,
    AddWestlawLexisComponent,
  ]
})

export class InputsModule {}