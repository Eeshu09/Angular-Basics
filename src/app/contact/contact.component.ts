import { Component,NgModule } from '@angular/core';
import { ChildComponent } from '../component/child/child.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ChildComponent,FormsModule,CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  // reciveData:string[]=[];
//   handleArrayFromChild(array:string[]){
// this.reciveData=array;
//   }
dropdown:string[]=['Apple','orange','banana']
  selectValue:string="";
  selectedValue:string="";

  onChangeValue(event:any){
    this.selectedValue=event.target.value
    // console.log(this.selectValue);
  }
recieveData:string='';
handleArrayFromChild(array:string){
  // this.recieveData=array;
  this.dropdown.push(array)
}

  // item:string="I am childcomponent"
  item:any={
    name:'Eeshu',
    age:23,
    Desination:"Software Developer"
  }
  
}
