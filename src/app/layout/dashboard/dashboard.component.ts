import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

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
