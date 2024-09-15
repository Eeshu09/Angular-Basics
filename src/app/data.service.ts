import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private name:string="";
  private email:string="";

  setName(name:string){
    this.name=name;
  }
  setEmail(email:string){
    this.email=email;
  }
  getName():string{
    return this.name;

  }
  getEmail():string{
           return this.email=this.email;
  
  }

  // private user: { name?: string; email?: string } = {};

  // setName(name: string) {
  //   this.user.name = name;
  // }

  // setEmail(email: string) {
  //   this.user.email = email;
  // }

  // getName(): string | undefined {
  //   return this.user.name;
  // }

  // getEmail(): string | undefined {
  //   return this.user.email;
  // }
  constructor() { }
}
