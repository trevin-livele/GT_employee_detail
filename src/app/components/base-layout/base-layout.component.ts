import { BreakpointObserver } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { faEye, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss']
})
export class BaseLayoutComponent implements OnInit {
  @ViewChild(MatSidenav)
  sideNav!: MatSidenav;
  eyeIcon = faEye;
  employeeIcon = faUser;


  constructor( private observerService: BreakpointObserver,
    private cd: ChangeDetectorRef,
    private router: Router,
   ) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.observerService.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sideNav.mode = 'over';
        this.sideNav.close();
      } else {
        this.sideNav.mode = 'side';
        this.sideNav.open();
      }
    });
    this.cd.detectChanges();
  }
}
