import { Injectable } from '@angular/core'
import { Professor } from '../model/professor.model'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  private readonly url = 'http://localhost:3000/professor'

  constructor(private http: HttpClient) { }

  post(professor: Professor): Observable<Professor> {
    return this.http.post<Professor>(this.url, professor)
  }

}
