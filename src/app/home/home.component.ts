import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  name:string="";
  email:string="";
  constructor(private dataService:DataService,private router:Router){}
  onSubmit(){
    this.dataService.setName(this.name);
    this.dataService.setEmail(this.email);
    // sessionStorage.setItem("email",this.email);
    // sessionStorage.setItem("name",this.name);
    this.router.navigate(['aboutUs']);
  }

}
