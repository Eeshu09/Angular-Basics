import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formval',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './formval.component.html',
  styleUrl: './formval.component.css'
})
export class FormvalComponent {
  user = {
    name: '',
    email: '',
    password: '',
    phoneNumber: '',
    address: ''
  };

onSubmit(){
  console.log("this",this.user)
}
}
