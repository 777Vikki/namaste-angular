import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { IEmployee, SortDirection, SortField } from '../employee.modal';
import { Router } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-employee-list',
  imports: [ReactiveFormsModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent implements OnInit {
  empList: IEmployee[] = [];
  sortField!: SortField;
  sortDirection!: SortDirection;
  searchControl = new FormControl('');

  constructor(private employeeService: EmployeeService, private router: Router) {

  }

  ngOnInit() {
    this.empList = this.employeeService.getEmployee();
    this.searchControl.valueChanges.pipe(
      debounceTime(300), // wait 300ms after user stops typing
      distinctUntilChanged() // only emit if value changed
    ).subscribe(search => {
      search = search?.toLowerCase() || '';
      this.filterSearch(search);
    });
  }

  filterSearch(search: string) {
    const employeeList = this.employeeService.getEmployee();
    if (search) {
      this.empList = employeeList.filter(emp => (emp.name.toLowerCase().includes(search) || emp.email.toLowerCase().includes(search) || emp.role.toLowerCase().includes(search)));
    } else {
      this.empList = employeeList;
    }
  }

  editEmployeeDetail(employee: IEmployee) {
    this.router.navigate(['/add-employee', employee.id])
  }

  deleteEmployeeDetail(employee: IEmployee) {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.employeeService.deleteEmployee(employee.id);
      const search = this.searchControl.value?.toLowerCase() || '';
      this.filterSearch(search);
    }
  }

  dummyEmployeeDetail() {
    this.employeeService.setDummyEmployeeDetail();
    this.empList = this.employeeService.getEmployee();
    this.searchControl.reset();
  }

  sortBy(field: SortField) {
    if (field === this.sortField) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortField = field;
      this.sortDirection = 'asc';
    }
    this.sortedElements();
  }

  sortedElements() {
    this.empList = [...this.empList].sort((a, b) => {
      const valA = a[this.sortField];
      const valB = b[this.sortField];
      return this.sortDirection === 'asc' ? valA.localeCompare(valB) : valB.localeCompare(valA);
    });
  }
}
