import { Component, Input, Output, EventEmitter } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { CommonModule } from '@angular/common'; // Required for common directives like ngIf
import { FormsModule } from '@angular/forms'; // Required for ngModel

@Component({
  selector: 'app-employee-modal',
  standalone: true,
  imports: [CommonModule, FormsModule ],
  templateUrl: './employee-modal.component.html',
  styleUrl: './employee-modal.component.css'
})
export class EmployeeModalComponent {
  @Input() selectedEmployee: any = {}; // Expecting selectedEmployee input from parent component

  @Input()employee: any = {};
  @Output() employeeUpdated = new EventEmitter<any>();
  
  constructor(private employeeService: EmployeeService){}

  saveChanges(){
    this.employeeUpdated.emit(this.selectedEmployee);

    const modalElement = document.getElementById('employeeModal');
    if(modalElement) {
      const modal = bootstrap.Modal.getInstance(modalElement);
      modal.hide();
    } 
  }


}
