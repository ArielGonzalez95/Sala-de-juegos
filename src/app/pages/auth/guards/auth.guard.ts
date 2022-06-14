
import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { USER_STORAGE_KEY } from "@shared/constants/constant";


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  
  constructor(private readonly router: Router) { }
  userActive =localStorage.getItem(USER_STORAGE_KEY);
  canActivate(): boolean {
    if (!this.userActive) {
      this.router.navigate(['/sign-in']);
    
    }
    
    return true;
  }
}