import { Component } from '@angular/core';
import { faDashboard,faHome,faUserCircle,faTasks,faShareFromSquare,faProjectDiagram ,faCog,faFolder} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  public sidebarShow: boolean = false;
  className="backGroundColor"
  itemColor="itemColor"
  secondView="secondView"
  icon={faDashboard,faHome,faUserCircle,faTasks,faShareFromSquare,faProjectDiagram,faCog,faFolder}
  isSubMenuOpen: { [key: string]: boolean } = {
    projects: false
  };

  // Method to toggle submenu visibility
  toggleSubMenu(menu: string): void {
    this.isSubMenuOpen[menu] = !this.isSubMenuOpen[menu]; // Use bracket notation
  }
}
