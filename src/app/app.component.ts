import { Component, OnInit  } from '@angular/core';
import { Router, NavigationEnd  } from '@angular/router';
import { AuthService } from './service/auth.service';
import { SidebarService } from './service/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'HRIS';
  showMenu: boolean = false;

  constructor(
    private router: Router,
    private sidebarService: SidebarService
    ) {this.sidebarService.getSidebarState().subscribe(isOpen => {
      this.sideBarOpen = isOpen;
    });
  }
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

  toggleSidebar(): void {
    this.sidebarService.toggleSidebar();
  }
  
}
