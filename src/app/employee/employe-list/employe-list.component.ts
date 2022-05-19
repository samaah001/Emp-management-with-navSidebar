import { Component, OnInit } from '@angular/core';
import { employeObj } from 'src/app/interfaces/employe';
@Component({
  selector: 'app-employe-list',
  templateUrl: './employe-list.component.html',
  styleUrls: ['./employe-list.component.scss']
})
export class EmployeListComponent implements OnInit {

  employeList: employeObj[];
  constructor() {
    this.employeList=[];
   }

  ngOnInit(): void {
    const records=localStorage.getItem('employeList');
    if(records!==null){
      this.employeList=JSON.parse(records);
    }
  }
  delete(id:any) {
    //debugger;
    const oldRecords =  localStorage.getItem('employeList');
    if (oldRecords !== null) { 
      const employeList = JSON.parse(oldRecords);
      employeList.splice(employeList.findIndex((a:any)=>a.employeId == id),1); 
      localStorage.setItem('employeList', JSON.stringify(employeList));
    }
    const records = localStorage.getItem('employeList');
    if (records !==  null) {
      this.employeList = JSON.parse(records);
    }
  }
 }


