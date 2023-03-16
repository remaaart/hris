import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-sidebar',
  templateUrl: './menu-sidebar.component.html',
  styleUrls: ['./menu-sidebar.component.scss']
})
export class MenuSidebarComponent {
  
  constructor(private router:Router){}

  showFiller = false;
  handleClick(){
    console.log('Panel Clicked!');
  }

  expandedPanel: string = "";

  panelClick(panelId: string) {
    if (panelId === this.expandedPanel) {
      this.expandedPanel = "";
    } else {
      this.expandedPanel = panelId;
    }
  }

  onLogoutClicked(){
    this.router.navigate(['']);
  }
}
