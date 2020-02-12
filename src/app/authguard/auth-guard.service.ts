import { AuthServiceService } from './../services/authservice/auth-service.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthServiceService, private router: Router) { }

  canActivate() {
    return this.authService.user$.pipe(map(user => {
      if (user) { return true }

      else {
        this.router.navigate(['login'])
        return false;
      }
    })
    )
  }
}
