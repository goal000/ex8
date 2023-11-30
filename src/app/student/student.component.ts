import { Component,OnInit } from '@angular/core';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit{
  stulist:any[]=[];
  constructor(private studentservice:StudentService)
  {

  }
  ngOnInit(): void {
    this.stulist=this.studentservice.getallstud();
  }
  addStudent(stuname:String, activity:String)
  {
    this.studentservice.addStudent(stuname,activity);
    alert("Student is added successfully");
  }

}
