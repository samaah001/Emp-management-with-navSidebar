import { Component, OnInit } from '@angular/core';
import { employeObj } from 'src/app/interfaces/employe';
import { ActivatedRoute , Router}from  '@angular/router';
@Component({
  selector: 'app-employe-update',
  templateUrl: './employe-update.component.html',
  styleUrls: ['./employe-update.component.scss']
})
export class EmployeUpdateComponent implements OnInit {
  employeObj:employeObj;
  constructor(private route:ActivatedRoute, private router: Router) { 
    this.employeObj=new employeObj();
    this.route.params.subscribe((res)=> {
      this.employeObj.employeId = res['id']
    });
    console.log(this.employeObj);
  }

  ngOnInit(): void {
    const oldRecords=localStorage.getItem('employeList');
    if(oldRecords!== null){
      const employeList=JSON.parse(oldRecords);
      const currentEmploye=employeList.find(m=>m.employeId == this.employeObj.employeId);
      if(currentEmploye!== undefined){
        this.employeObj.employeCity = currentEmploye.employeCity;
        this.employeObj.employeState = currentEmploye.employeState;
        this.employeObj.employeMobile = currentEmploye.employeMobile;
        this.employeObj.employeName = currentEmploye.employeName;
      }
    }
  }
  updateEmploye() {
    //debugger;  
    const oldRecords =  localStorage.getItem('employeList');
    if (oldRecords !== null) { 
      const employeList = JSON.parse(oldRecords);
      employeList.splice(employeList.findIndex((a)=>a.employeId == this.employeObj.employeId),1);
      employeList.push(this.employeObj);
      localStorage.setItem('employeList', JSON.stringify(employeList));
    }
    this.router.navigateByUrl('/employeList');

  }
}
