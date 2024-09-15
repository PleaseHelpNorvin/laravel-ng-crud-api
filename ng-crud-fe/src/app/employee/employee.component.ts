import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { EmployeeModalComponent } from './employee-modal/employee-modal.component'; 

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule,EmployeeModalComponent],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

  selectedEmployee: any = {}; // Initialize selectedEmployee
  employees: any[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.fetchEmployees();
  }

  // Fetch employees from the API
  fetchEmployees() {
    this.employeeService.getEmployees().subscribe((data: any[]) => {
      this.employees = data;
    });
  } 
  openAddModal() {
    const modalElement = document.getElementById('employeeModal');
    if (modalElement) {
      const modal = (bootstrap as any).Modal.getOrCreateInstance(modalElement);
      modal.show(); // Show the modal
    }
    this.selectedEmployee = {
      id: null,
      name: '',
      email: '',
      salary: ''
    };
  }

  // Open modal to edit existing employee
  openEditModal(employeeId: number) {
    this.employeeService.getEmployeeById(employeeId).subscribe((employee: any) => {
      this.selectedEmployee = employee; // Set the selected employee
  
      const modalElement = document.getElementById('employeeModal');
      if (modalElement) {
        const modal = (bootstrap as any).Modal.getOrCreateInstance(modalElement);
        modal.show();
      }
    });
  }

  
  handleEmployeeUpdated(employees: any) {
    if (employees.id) {
      // Update existing employee
      this.employeeService.updateEmployee(employees.id, employees).subscribe(
        () => {
          this.fetchEmployees(); // Refresh employee list after update
          alert('success')
        },
        (error) => {
          console.error('Update failed:', error); // Log the error details
          alert('Failed to update employee. Please check the input data.');
        }
      );
    } else {
      // Add new employee
      this.employeeService.addEmployee(employees).subscribe(
        () => {
          this.fetchEmployees(); // Refresh employee list after adding
        },
        (error) => {
          console.error('Creation failed:', error); // Log the error details
          alert('Failed to add employee. Please check the input data.');
        }
      );
    }
  }
  


  // handleEmployeeUpdated(updatedEmployee: any) {
  //   // Handle the updated employee data, e.g., update the list
  //   this.loadEmployees(); // Reload employees after update
  // }

  confirmDelete(employeeId : number){
    if(confirm('Are you sure you want to delete this employee?')){
      this.employeeService.deleteEmployee(employeeId).subscribe(() => {
        this.fetchEmployees();
      });
    }
  }
}
