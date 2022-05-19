import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { employeObj } from 'src/app/interfaces/employe';

@Component({
  selector: 'app-employe-register',
  templateUrl: './employe-register.component.html',
  styleUrls: ['./employe-register.component.scss']
})
export class EmployeRegisterComponent implements OnInit {
  employeObj: employeObj;
  constructor(private router: Router) { 
    this.employeObj=new employeObj();//initialization array of refrence type
  }

  ngOnInit(): void {
  }
  getEmployId(){
    const oldRecords=localStorage.getItem('employeList');
    if(oldRecords !== null){
      const employeList=JSON.parse(oldRecords);
      return employeList.length + 1;
    }else{
      return 1;
    }
  }
  saveEmp(){
    //debugger;
    const latestId=this.getEmployId();
    this.employeObj.employeId=latestId;
    const oldRecords=localStorage.getItem('employeList');
    if(oldRecords!== null){
      const employeList= JSON.parse(oldRecords);
      employeList.push(this.employeObj);
      localStorage.setItem('employeList',JSON.stringify(employeList));
    }else{
      const empArray=[];
      empArray.push(this.employeObj);
      localStorage.setItem('employeList',JSON.stringify(empArray));
      console.log("saved");
    }
    this.router.navigateByUrl('/employeList');
  }

}
