import { Injectable } from '@angular/core';
import { IEmployee } from './employee.modal';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees: IEmployee[] = [];

  constructor() { }

  getEmployee(): IEmployee[] {
    return [...this.employees];
  }

  getEmployeeById(id: number): IEmployee | undefined {
    return this.employees.find(emp => emp.id === id);
  }

  employeeDoublicateByEmail(email: string): boolean {
    return this.employees.find(emp => emp.email === email) ? true : false;
  }

  addEmployee(employee: IEmployee) {
    this.employees.push(employee)
  }

  updateEmployee(employee: IEmployee) {
    const index = this.employees.findIndex(emp => emp.id === employee.id);
    this.employees[index] = { ...employee };
  }

  deleteEmployee(id: number) {
    this.employees = this.employees.filter(emp => emp.id !== id);
  }

  generateId(): number {
    if (this.employees.length) {
      const ids = this.employees.map(d => d.id).sort((a, b) => a - b);
      return ids[ids.length - 1] + 1;
    } else {
      return 1;
    }
  }

  setDummyEmployeeDetail() {
    this.employees = this.getDummyEmployeeDetail();
  }

  getDummyEmployeeDetail(): IEmployee[] {
    return [
      { id: 1, name: 'Vivek Kumar', email: 'vkmm777@gmail.com', role: 'Sr. Angular Developer' },
      { id: 2, name: 'Anjali Sharma', email: 'anjali.sharma@example.com', role: 'UI Developer' },
      { id: 3, name: 'Rahul Mehta', email: 'rahul.mehta@example.com', role: 'Frontend Engineer' },
      { id: 4, name: 'Priya Singh', email: 'priya.singh@example.com', role: 'Angular Developer' },
      { id: 5, name: 'Amit Verma', email: 'amit.verma@example.com', role: 'Web Developer' },
      { id: 6, name: 'Neha Gupta', email: 'neha.gupta@example.com', role: 'Software Engineer' },
      { id: 7, name: 'Sandeep Yadav', email: 'sandeep.yadav@example.com', role: 'Sr. Angular Developer' },
      { id: 8, name: 'Kajal Rathi', email: 'kajal.rathi@example.com', role: 'Frontend Developer' },
      { id: 9, name: 'Nitin Joshi', email: 'nitin.joshi@example.com', role: 'Angular Developer' },
      { id: 10, name: 'Meena Das', email: 'meena.das@example.com', role: 'UI/UX Designer' },
      { id: 11, name: 'Vikas Pandey', email: 'vikas.pandey@example.com', role: 'Angular Lead' },
      { id: 12, name: 'Sneha Roy', email: 'sneha.roy@example.com', role: 'Frontend Engineer' },
      { id: 13, name: 'Manish Tiwari', email: 'manish.tiwari@example.com', role: 'Full Stack Developer' },
      { id: 14, name: 'Divya Kapoor', email: 'divya.kapoor@example.com', role: 'Software Developer' },
      { id: 15, name: 'Ravi Shankar', email: 'ravi.shankar@example.com', role: 'Angular Architect' },
      { id: 16, name: 'Pooja Sinha', email: 'pooja.sinha@example.com', role: 'Web Designer' },
      { id: 17, name: 'Karan Jain', email: 'karan.jain@example.com', role: 'Frontend Developer' },
      { id: 18, name: 'Isha Thakur', email: 'isha.thakur@example.com', role: 'Angular Developer' },
      { id: 19, name: 'Rohit Agarwal', email: 'rohit.agarwal@example.com', role: 'Tech Lead' },
      { id: 20, name: 'Deepika Chauhan', email: 'deepika.chauhan@example.com', role: 'UI Developer' },
      { id: 21, name: 'Ashok Rana', email: 'ashok.rana@example.com', role: 'Sr. Web Developer' },
      { id: 22, name: 'Simran Kaur', email: 'simran.kaur@example.com', role: 'Angular Developer' },
      { id: 23, name: 'Jatin Ahuja', email: 'jatin.ahuja@example.com', role: 'Software Engineer' },
      { id: 24, name: 'Riya Sen', email: 'riya.sen@example.com', role: 'Frontend Intern' },
      { id: 25, name: 'Alok Kumar', email: 'alok.kumar@example.com', role: 'Angular Developer' },
      { id: 26, name: 'Tanya Batra', email: 'tanya.batra@example.com', role: 'Frontend Designer' },
      { id: 27, name: 'Sumit Saxena', email: 'sumit.saxena@example.com', role: 'Angular Engineer' },
      { id: 28, name: 'Shreya Ghosh', email: 'shreya.ghosh@example.com', role: 'Frontend Engineer' },
      { id: 29, name: 'Naveen Raj', email: 'naveen.raj@example.com', role: 'Web Developer' },
      { id: 30, name: 'Payal Das', email: 'payal.das@example.com', role: 'UI/UX Expert' },
      { id: 31, name: 'Arjun Bansal', email: 'arjun.bansal@example.com', role: 'Angular Consultant' },
      { id: 32, name: 'Lavanya Menon', email: 'lavanya.menon@example.com', role: 'Frontend Developer' },
      { id: 33, name: 'Harsh Vardhan', email: 'harsh.vardhan@example.com', role: 'Angular Engineer' },
      { id: 34, name: 'Namita Jain', email: 'namita.jain@example.com', role: 'UI Developer' },
      { id: 35, name: 'Vivek Srivastava', email: 'vivek.srivastava@example.com', role: 'Angular Lead' },
      { id: 36, name: 'Shruti Sharma', email: 'shruti.sharma@example.com', role: 'Frontend Intern' },
      { id: 37, name: 'Raghav Kapoor', email: 'raghav.kapoor@example.com', role: 'Sr. Developer' },
      { id: 38, name: 'Mehul Thakkar', email: 'mehul.thakkar@example.com', role: 'Angular Architect' },
      { id: 39, name: 'Priti Nair', email: 'priti.nair@example.com', role: 'Frontend Developer' },
      { id: 40, name: 'Rajeev Ranjan', email: 'rajeev.ranjan@example.com', role: 'Software Developer' },
      { id: 41, name: 'Mansi Patel', email: 'mansi.patel@example.com', role: 'UI Specialist' },
      { id: 42, name: 'Tarun Jha', email: 'tarun.jha@example.com', role: 'Angular Developer' },
      { id: 43, name: 'Bhavna Kaul', email: 'bhavna.kaul@example.com', role: 'Frontend Developer' },
      { id: 44, name: 'Ankit Rawat', email: 'ankit.rawat@example.com', role: 'Web Developer' },
      { id: 45, name: 'Geetanjali Mishra', email: 'geetanjali.mishra@example.com', role: 'Sr. Angular Developer' },
      { id: 46, name: 'Devansh Singh', email: 'devansh.singh@example.com', role: 'UI/UX Designer' },
      { id: 47, name: 'Pallavi Chauhan', email: 'pallavi.chauhan@example.com', role: 'Frontend Engineer' },
      { id: 48, name: 'Yash Jain', email: 'yash.jain@example.com', role: 'Angular Developer' },
      { id: 49, name: 'Sanya Arora', email: 'sanya.arora@example.com', role: 'Web Engineer' },
      { id: 50, name: 'Gaurav Mishra', email: 'gaurav.mishra@example.com', role: 'Frontend Tech Lead' }
    ];
  }
}
