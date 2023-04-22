import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable, map } from 'rxjs'
import { Usuario } from '../model/usuario'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly url = 'http://localhost:3000/login'
  private usuarioLogado = new BehaviorSubject<boolean>(false)
  public usuario: Usuario = null as any

  constructor(private http: HttpClient) {
    const usuario = this.recuperarUsuarioNoSessionStorage()
    if (usuario) {
      this.usuario = usuario
      this.setUsuarioLogado(true)
    }
  }

  authentication(usuario: Usuario): Observable<boolean> {
    return this.http.post<any>(this.url, usuario).pipe(
      map((usuario: Usuario) => {
        this.usuario = usuario
        this.guardarUsuarioNoSessionStorage(this.usuario)
        this.setUsuarioLogado(true)
        return true
      })
    )
  }

  logout(): void {
    this.usuario = null as any
    this.guardarUsuarioNoSessionStorage(this.usuario)
    this.setUsuarioLogado(false)
  }

  getUsuarioLogado(): Observable<boolean> {
    return this.usuarioLogado.asObservable()
  }

  private setUsuarioLogado(value: boolean): void {
    this.usuarioLogado.next(value)
  }

  private guardarUsuarioNoSessionStorage(usuario: Usuario): void {
    sessionStorage.setItem('app-usuario', JSON.stringify(usuario))
  }

  private recuperarUsuarioNoSessionStorage(): Usuario {
    const usuario = sessionStorage.getItem('app-usuario')
    return usuario ? JSON.parse(usuario) : null
  }
}
