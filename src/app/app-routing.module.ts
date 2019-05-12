import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { SupremePostComponent } from './courts/supreme-post/supreme-post.component';
import { SupremePreComponent } from './courts/supreme-pre/supreme-pre.component';
import { AppealPostPrintComponent } from './courts/appeal-post-print/appeal-post-print.component';
import { AppealPostNonprintComponent } from './courts/appeal-post-nonprint/appeal-post-nonprint.component';
import { AppealPreNonprintComponent } from './courts/appeal-pre-nonprint/appeal-pre-nonprint.component';
import { AppealPrePrintComponent } from './courts/appeal-pre-print/appeal-pre-print.component';
import { AbbreviateTermComponent } from './pages/abbreviate-term/abbreviate-term.component';
import { CustomCitationComponent } from './pages/custom-citation/custom-citation.component';

const appRoutes: Routes =[
  { path: '', component: DashboardPageComponent },
  { path: 'supreme-post', component: SupremePostComponent},
  { path: 'appeal-post-print', component: AppealPostPrintComponent},
  { path: 'appeal-post-nonprint', component: AppealPostNonprintComponent},
  { path: 'supreme-pre', component: SupremePreComponent},
  { path: 'appeal-pre-print', component: AppealPrePrintComponent},
  { path: 'appeal-pre-nonprint', component: AppealPreNonprintComponent},
  { path: 'abbreviate-term', component: AbbreviateTermComponent},
  { path: 'custom-citation', component: CustomCitationComponent},
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}