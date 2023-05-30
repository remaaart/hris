import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private isSidebarOpen = new BehaviorSubject<boolean>(false);

  toggleSidebar(): void {
    this.isSidebarOpen.next(!this.isSidebarOpen.value);
  }

  getSidebarState(): BehaviorSubject<boolean> {
    return this.isSidebarOpen;
  }
}