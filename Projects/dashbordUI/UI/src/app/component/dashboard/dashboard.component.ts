import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { faDashboard,faHome,faUsersViewfinder,faUserCircle,faSpinner,faTasks,faUsers,faCheckCircle,faShareFromSquare,faFolderOpen,faProjectDiagram ,faCog,faFolder} from '@fortawesome/free-solid-svg-icons';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements AfterViewInit {

  icon={faDashboard,faHome,faCheckCircle,faSpinner,faUsersViewfinder,
    faFolderOpen,faUsers,faUserCircle,faTasks,faShareFromSquare,faProjectDiagram,faCog,faFolder}
  isSubMenuOpen: { [key: string]: boolean } = {
    projects: false
  };

  // Method to toggle submenu visibility
  toggleSubMenu(menu: string): void {
    this.isSubMenuOpen[menu] = !this.isSubMenuOpen[menu]; // Use bracket notation
  }
 

  // After View Init to Load Charts
  

  ngAfterViewInit() {
   
  }
  
}
