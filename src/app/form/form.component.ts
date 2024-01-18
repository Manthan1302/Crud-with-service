import { Component, Input } from '@angular/core';
import { CompanyServices } from '../services/company.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  @Input() cname!:string;
  @Input() cgst!:string;
  @Input() index!:number;
  // @Input() addStatus!:boolean;
  @Input() updateStatus!:boolean;

  constructor(private services: CompanyServices) { }

  addData(name: string, gst: string) {
    this.services.addCompanyData(name, gst);
    console.log(name, gst);
   

  }
  updateData(name: string, gst: string) {
    this.services.editCompanyData(this.index, name, gst);
    // this.addStatus=true;
    if(this.updateStatus){
      
      this.updateStatus=false;
    }else{
      this.updateStatus=true;

    }
  }

}
