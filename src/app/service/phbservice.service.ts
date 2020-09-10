import { Injectable } from '@angular/core';
import { Phbook } from 'src/app/Models/Phbook';

@Injectable({
  providedIn: 'root'
})
export class PhbserviceService {
  phb:Phbook[]=[
    {id:1,Fname:'Naruto',Lname:'Uzumaki',ConNumber:'1234567'},
    {id:2,Fname:'Kakashi',Lname:'Hatake',ConNumber:'9817263'},
    {id:3,Fname:'Minato',Lname:'Namikaze',ConNumber:'87123492'},
    {id:4,Fname:'Itachi',Lname:'Uchiha',ConNumber:'783344221'}
  ];
  newPhb:Phbook[]=[];
  delph:number;
  getAllDetails(){
    return this.phb;
  }

  addContact(Fname:string,Lname:string,ConNumber:string){
    let addCon={id:this.phb.length+1,Fname:Fname,Lname:Lname,ConNumber:ConNumber}
    alert("Contact Added Sucessfully");
    return this.phb.push(addCon);
  }

  delContact(ph:Phbook){
    this.delph=this.phb.indexOf(ph);
    this.newPhb=this.phb.splice(this.delph,1);
    alert("Contact Deleted Sucessfully");
    return this.newPhb;
  }

  getDetailsById(id:number){
    for(var i in this.phb){
      if(this.phb[i].id==id){
        console.log(this.phb[i]);
        return this.phb[i];
      }
    }
  }
  editDetails(Cid:number,Fn:string,Ln:string,ConNum:string){
    for(var i in this.phb){
      if(this.phb[i].id==Cid){
        this.phb[i].Fname=Fn;
        this.phb[i].Lname=Ln;
        this.phb[i].ConNumber=ConNum;
        break;
      }
    }
    alert("Contact Edited Sucessfully!");
  }

  constructor() { }
}
