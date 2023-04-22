import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AuthService } from './services/auth.service'
import { Router } from '@angular/router'
import { AtualizarStyle } from 'src/app/utils/atualizarStyle'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginFormGroup: FormGroup
  private setStyle = new AtualizarStyle()

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.setStyle.setBackgroundBobyTelaLogin()
    this.logout()
    this.loginFormGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  login() {
    if (!this.loginFormGroup.valid) return
    this.authService.authentication(this.loginFormGroup.value).subscribe({
      next: () => {
        this.setStyle.setBackgroundBobyTodasTelas()
        this.router.navigate(['/'])
      },
      error: (error: any) => {
        console.log(error)
      }
    })
  }

  logout(): void {
    this.authService.logout()
  }
}
