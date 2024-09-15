import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-update-user',
  standalone: true,
  imports: [HttpClientModule,FormsModule],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent implements OnInit {
  userId!: number;
  // userData: any;
  // userData:any={
  //   name:'',
  //   age:null,
  //   email:'',
  //   id:null
  // }
  userData:any={}
  // constructor(private http:HttpClient,private route:ActivatedRoute){}

     constructor(private http:HttpClient,private route:ActivatedRoute){
      
     }



  ngOnInit(): void {
    // this.userId = Number(this.route.snapshot.paramMap.get('id'));
    // this.getUserData(this.userId); 
    
    this.route.queryParams.subscribe(params => {
      this.userId = +params['id']; // Convert the id from string to number
      this.getUserData(this.userId);
    });
    
  }
  getUserData(id:number):void{
    this.http.get(`http://localhost:5170/api/User/${id}`).subscribe(data=>{
      this.userData=data;
    console.log(this.userData);
    })

  }
  onSubmit():void{
    this.http.put('http://localhost:5170/api/User',this.userData).subscribe({
      next:(response)=>{
        console.log("respone",response);
      },
      error:(err)=>{
        console.log("error",err);
      }
    })

  }

}
