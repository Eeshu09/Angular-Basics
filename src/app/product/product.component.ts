import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  constructor(private route:Router,private router:ActivatedRoute){}
send(id:number):void{
  this.route.navigate([id],{relativeTo:this.router});

}
taxi(): void {
  // Navigate to the 'taxi' child route using the relative path
  this.route.navigate(['taxi']);
}

}
