import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-popupmodel',
  templateUrl: './popupmodel.component.html',
  styleUrl: './popupmodel.component.css'
})
export class PopupmodelComponent {
  viewTaskForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<PopupmodelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any // This can be used to pass data to the dialog
  ) {
    // Initialize the form with default values or passed data
    this.viewTaskForm = new FormGroup({
      taskName: new FormControl('', [Validators.required]),
      priority: new FormControl('low', [Validators.required]),  
      description: new FormControl('', [Validators.maxLength(500)]), 
      dueDate: new FormControl('', [Validators.required]), 
      status: new FormControl('not-started', [Validators.required]),  
      tags: new FormControl('', []), 
      assignedUser: new FormControl('', [Validators.required]),
      estimatedTime: new FormControl('', [Validators.pattern(/^[0-9]*$/)]), 
      completionDate: new FormControl('', []), 
      attachments: new FormControl('', []),  
      comments: new FormControl('', []), 
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.viewTaskForm.valid) {
      console.log(this.viewTaskForm.value); // Handle the form submission
      this.dialogRef.close(this.viewTaskForm.value); // Close and return form data
    } else {
      console.log('Form is not valid');
    }
  }

}