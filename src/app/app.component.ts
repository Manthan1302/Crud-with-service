import { Component, OnInit } from '@angular/core';
import { CompanyServices } from './services/company.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit{
  company:{name:string,gst:string}[]=[]

  constructor(private services:CompanyServices){
  }
  ngOnInit(): void {
    this.company=this.services.company
console.log(this.company);

  }
}
