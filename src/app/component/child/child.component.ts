import { CommonModule } from '@angular/common';
import { Component,Input, Output,EventEmitter, output} from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  // inputs:["ch"]
})
export class ChildComponent {
  inputData:string='';
  // dataArray:string[]=[];

  // @Output() arrayToSend = new EventEmitter<string[]>()
@Output()arrayToSend=new EventEmitter<string>();

  @Input()ch:string | undefined;

submitData(){
  if(this.inputData){
  // this.inputData=
  
    this.arrayToSend.emit(this.inputData);
    this.inputData=''
    // this.dataArray.push(this.inputData);
    // this.arrayToSend.emit(this.dataArray);
    // this.inputData='';

  }
}

}
