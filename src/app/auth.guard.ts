import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { DataService } from './data.service';

export const authGuard: CanActivateFn = (route, state) => {
  const _router=inject(Router)
  const dataService=inject(DataService)
  
  let name=dataService.getName();
  let email=dataService.getEmail();
  let auth=name && email;
  if(!auth){
    if (typeof window !== 'undefined') {
      window.alert('Please login');
    }
     _router.navigate(['']);
    return false;
  }
  return true;
};
