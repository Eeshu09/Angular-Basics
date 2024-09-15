import { Component ,OnInit} from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  name:string="";
  email:string="";

  constructor(private dataService:DataService){}
  // ngOnInit(){
  //   this.name=this.dataService.getName();
  //   this.email=this.dataService.getEmail();
  // } 

  ngOnInit() {
    this.name = this.dataService.getName() || '';
    this.email = this.dataService.getEmail() || '';
  }


}
