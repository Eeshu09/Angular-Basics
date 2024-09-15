import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [HttpClientModule,CommonModule,FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  user={
    name:'',
    age:null,
    email:''
  }
  constructor(protected http:HttpClient){}
  onSubmit(){
    this.http.post('http://localhost:5170/api/User',this.user).subscribe({
      next:(response)=>{
        console.log("response",response);
      },error:(err)=>{
        console.log("error",err);
      }
    })
  }

}
