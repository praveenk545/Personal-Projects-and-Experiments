import { AfterViewInit, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faDashboard,faHome,faUsersViewfinder,faUserCircle,faSpinner,faTasks,faUsers,faCheckCircle,faShareFromSquare,faFolderOpen,faProjectDiagram ,faCog,faFolder} from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { PopupmodelComponent } from '../dialog/popupmodel/popupmodel.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements AfterViewInit {
  constructor(private dialog: MatDialog) {}
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
  public viewTaskForm=new FormGroup({
    taskName: new FormControl('', [Validators.required]), 
    description: new FormControl('', [Validators.maxLength(500)]), 
    dueDate: new FormControl('', [Validators.required]), 
    priority: new FormControl('low', [Validators.required]), 
    status: new FormControl('not-started', [Validators.required]),  
    tags: new FormControl('', []), 
    assignedUser: new FormControl('', [Validators.required]),
    estimatedTime: new FormControl('', [Validators.pattern(/^[0-9]*$/)]), 
    completionDate: new FormControl('', []), 
    attachments: new FormControl('', []),  
    comments: new FormControl('', []), 
   // more:new FormArray([])
  })
 
  
onCancel(){

}




  // Open the dialog with the form
  addTasks() {
    const dialogRef = this.dialog.open(PopupmodelComponent, {
   
      data: {
        form: this.viewTaskForm
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      // Handle form submission or close actions here
      console.log('Dialog closed:', result);
    });
  }
  
}
