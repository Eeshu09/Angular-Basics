import { Component } from '@angular/core';
import { ButtonComponent } from '../../common/button/button.component';
import { InputComponent } from '../../common/input/input.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-merge',
  standalone: true,
  imports: [ButtonComponent,InputComponent,CommonModule,FormsModule],
  templateUrl: './merge.component.html',
  styleUrl: './merge.component.css'
})
export class MergeComponent {

  recieveData:string=''
  btnName:string="Submit"

  value:string=''
  placeholder:string=""
handleValue(st:any){
this.recieveData=st;
}
handle(){
console.log(this.recieveData);
}
}
