export class CompanyServices{
    company:{name:string,gst:string}[]=[]

    addCompanyData(name:string,gst:string){
        this.company.push({name:name,gst:gst})
    }
    deleteComapnyData(index:number){
        this.company.splice(index,1)
        console.log(this.company);
        
    }
    editCompanyData(index:number, name:string,gst:string){
        this.company[index].name=name;
        this.company[index].gst=gst;
    }


}