import { CommonModule } from '@angular/common';
import { Component,Input,Output ,EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  @Input()placeholder:any
  @Input()value:any;
  @Output()valueChange=new EventEmitter<string>();
  // @Output()arrayToSend=new EventEmitter<string>();

onInputChange(event:Event){
  const inputElement=event.target as HTMLInputElement;
  this.value=inputElement.value;
  this.valueChange.emit(this.value);
}


}
