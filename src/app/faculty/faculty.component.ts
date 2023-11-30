import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent  implements OnInit{
  stulist:any[]=[];
  constructor(private studentservice: StudentService)
  {
  }
  ngOnInit(): void {
    //this.stulist=this.studentservice.getallstud();
    this.studentservice.product().subscribe(productdata=>this.stulist=productdata);
  }

}
