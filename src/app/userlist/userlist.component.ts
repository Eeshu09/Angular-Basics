 import { Component ,inject, OnInit} from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Route,Router } from '@angular/router';
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}
@Component({
  selector: 'app-userlist',
  standalone: true,
  imports: [HttpClientModule,CommonModule],
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.css'
})
export class UserlistComponent implements OnInit {
  httpClient=inject(HttpClient);
  userData:User []=[]
  constructor(private router:Router){}
  ngOnInit(): void {
    this.fetchData();
  }
  fetchData() {
    this.httpClient.get<any[]>('http://localhost:5170/api/User').subscribe({
      next: (data: any[]) => {
        this.userData = data;
      },
      error: (err) => {
        console.error('Error fetching dataa', err);
      }
    });
  }
                                           //send id in params
//   editUser(userId:number):void{
// this.router.navigate(['updateuser',userId])
//   }

                                               //send id in query
                      
  editUser(userId:number):void{
    this.router.navigate(['updateuser'],{queryParams:{id:userId}});
  }

  deleteUser(id: number): void {
    this.httpClient.delete(`http://localhost:5170/api/User?id=${id}`).subscribe({
      next: (data) => {
        // this.fetchData();
        console.log('User deleted successfully', data);
        // Remove the deleted user from the userData array
        this.userData = this.userData.filter((user:User) => user.id !== id);
      },
      error: (err) => {
        console.error('Error deleting user', err);
      }
    });
  }
}

