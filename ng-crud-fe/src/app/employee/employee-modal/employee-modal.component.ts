import { Component, Input, Output, EventEmitter } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-modal',
  standalone: true,
  imports: [],
  templateUrl: './employee-modal.component.html',
  styleUrl: './employee-modal.component.css'
})
export class EmployeeModalComponent {
  @Input()employee: any = {};
  @Output() employeeUpdated = new EventEmitter<any>();
  
  constructor(private employeeService: EmployeeService){}

  saveChanges(){
    this.employeeUpdated.emit(this.employee);

    const modalElement = document.getElementById('employeeModal');
    if(modalElement) {
      const modal = bootstrap.Modal.getInstance(modalElement);
      modal.hide();
    } 
  }


}
