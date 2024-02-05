import { Component } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  labelName:boolean = true;
  LabelAge:boolean =true;
  labelEmail:boolean =true;
  labelPassword :boolean = true;
  constructor(){}
  appearLabel(event:any){
    console.log(event.target.id);
    if(event.target.id == "userName"){
      if(event.target.value != ''){
        this.labelName = false;
      }else{
        this.labelName=true;
      }
    }else if(event.target.id == "userPassword"){
      if(event.target.value != ''){
        this.labelPassword = false;
      }else{
        this.labelPassword=true;
      }
    }else if(event.target.id == "userEmail"){
      if(event.target.value != ''){
        this.labelEmail = false;
      }else{
        this.labelEmail=true;
      }
    }else if(event.target.id == "userAge"){
      if(event.target.value != ''){
        this.LabelAge = false;
      }else{
        this.LabelAge=true;
      }
    }
  }

}
