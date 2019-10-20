import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.sass']
})

export class DashboardPageComponent  {

  @ViewChild('ohioRoute', { static: false }) ohioRoute: ElementRef;

  constructor(private router: Router) {}

  private ohioPost: string = 'May 1, 2002 and After';
  private ohioPre: string = 'Before May 1, 2002';
  private ohioCourts = {
    ohioSupremeCourt: 'Ohio Supreme Court',
    ohioAppealsCourtPrint: 'Ohio Appeals Court (Print)',
    ohioAppealsCourtNonprint: 'Ohio Appeals Court (Nonprint)'
  };

  public dashboardRoutes: Array<{court: string, time: string, guid: number, route: string}> = [
    {
      court: this.ohioCourts.ohioSupremeCourt,
      time: this.ohioPost,
      guid: 1,
      route: '/supreme-post'
    },
    {
      court: this.ohioCourts.ohioAppealsCourtPrint,
      time: this.ohioPost,
      guid: 2,
      route: '/appeal-post-print'
    },
    {
      court: this.ohioCourts.ohioAppealsCourtNonprint,
      time: this.ohioPost,
      guid: 3,
      route: '/appeal-post-nonprint'
    },
    {
      court: this.ohioCourts.ohioSupremeCourt,
      time: this.ohioPre,
      guid: 4,
      route: '/supreme-pre'
    },
    {
      court: this.ohioCourts.ohioAppealsCourtPrint,
      time: this.ohioPre,
      guid: 5,
      route: '/appeal-pre-print'
    },
    {
      court: this.ohioCourts.ohioAppealsCourtNonprint,
      time: this.ohioPre,
      guid: 6,
      route: '/appeal-pre-nonprint'
    },
  ];

  public forwardToOhioCite() {
    this.ohioRoute = this.ohioRoute.nativeElement.value;
    this.router.navigate([this.ohioRoute]);
  }
}
