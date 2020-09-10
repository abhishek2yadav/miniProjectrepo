import { Component, OnInit } from '@angular/core';
//import{ Pipe, PipeTransform} from '@angular/core';
import { PhbserviceService } from 'src/app/service/phbservice.service';
import { Phbook } from 'src/app/Models/Phbook';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  phb:Phbook[]=[];
  term:string;
  myVar:boolean=true;
  

  flip(){
    this.myVar=!this.myVar;
  }

  constructor(private _phbService:PhbserviceService,private _router:Router ) { }

  ngOnInit(): void {
    this.phb=this._phbService.getAllDetails();
  }
  addContact(Fname:string,Lname:string,ConNumber:string){
    this._phbService.addContact(Fname,Lname,ConNumber);
  }
  deleteContact(p:Phbook){
    this._phbService.delContact(p);
  }
  editDetails(id:number){
    this._router.navigate(['edit',id]);
  }
  
  }


