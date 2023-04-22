import { Component } from '@angular/core'
import { Subscription } from 'rxjs'
import { AuthService } from './features/login/services/auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public sidebarExpanded = true
  public isUsuarioLogado: boolean = false
  public subscription: Subscription

  constructor(private authService: AuthService) { 
    this.subscription = this.authService.getUsuarioLogado().subscribe({
      next: (value: boolean) => {
        this.isUsuarioLogado = value
      }
    })
  }
}
