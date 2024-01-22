import { Component, Input, OnInit } from '@angular/core';
import { CompanyServices } from '../services/company.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
 

  constructor(private services: CompanyServices) { }
  
  index!: number;
  companyname:string ="";
  companygst:string ="";
  updatestatus:boolean=false;
  // addStatus:boolean = false;
  
  com=this.services.getComanyData()
  
  deleteComapny(name: string) {
    const index = this.com.findIndex(ele => ele.name === name)
    this.services.deleteComapnyData(index)

  }

  editComapny(name: string) {
    this.index = this.com.findIndex(ele => ele.name === name)
    this.companyname=this.com[this.index].name;
    this.companygst=this.com[this.index].gst;
    console.log(this.index);
    if(this.updatestatus){
      this.updatestatus=false;
    }else{
      this.updatestatus=true;

    }
    // this.addStatus=true
    
  }


}
