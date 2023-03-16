import { Component, OnInit  } from '@angular/core';
import { Router, NavigationEnd  } from '@angular/router';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'HRIS';
  showMenu: boolean = false;

  constructor(
    private router: Router
    ) {}
  sideBarOpen = true;

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showMenu = event.url !== '/';
        this.sideBarOpen = false;
      }
    });
  }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
