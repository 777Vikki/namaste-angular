import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-employee-form',
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.scss'
})
export class EmployeeFormComponent implements OnInit {
  empForm!: FormGroup;
  id!: string;

  constructor(private fb: FormBuilder,
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router) {
    this.empForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]], // If more than one Validators, it is mandatory to put validators in Array.
      role: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    if(this.id) {
      const employeeDetail = this.employeeService.getEmployeeById(Number(this.id));
      if(employeeDetail) {
        this.empForm.patchValue(employeeDetail);
      } else {
        alert("Employee detail not found. Please add new Employee");
        this.router.navigate(['/add-employee'])
      }
    }
  }

  onSubmit() {
    if (this.empForm.valid) {
      const isEmployeeExist = this.employeeService.employeeDoublicateByEmail(this.empForm.value.email);
      if(this.id) {
        const employee = { ...this.empForm.value, id: Number(this.id) };
        this.employeeService.updateEmployee(employee);
      } else if(!isEmployeeExist){
        const employee = { ...this.empForm.value, id: this.employeeService.generateId() };
        this.employeeService.addEmployee(employee);
        this.empForm.reset();
      } else {
        alert("Employee is exist");

      }
    }
  }
}
