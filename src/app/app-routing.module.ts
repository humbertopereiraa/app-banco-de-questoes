import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AuthGuard } from './core/guards/auth.guard'

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule), canActivate: [AuthGuard] },
  { path: 'login', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule) },
  { path: 'professor/cadastro', loadChildren: () => import('./features/cadastro-professor/cadastro-professor.module').then(m => m.CadastroProfessorModule) }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
