import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
stulist:any[]=[];
addStudent(stuname: String,activity:String)
{
  this.stulist.push({name:stuname,acty:activity})
}
getallstud()
{
  return this.stulist;
}
  constructor(private http:HttpClient) {}
  product():Observable<any>
  {
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }
}
