import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router'
import { AuthService } from 'src/app/features/login/services/auth.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    this.authService.getUsuarioLogado().subscribe({
      next: (value: boolean) => {
        if(!value) {
          this.router.navigate(['/login'])
        }
        return value
      }
    })
  }

}
