import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ProfessorService } from './services/professor.service'
import { Professor } from './model/professor.model'
import { Router } from '@angular/router'

@Component({
  selector: 'app-cadastro-professor',
  templateUrl: './cadastro-professor.component.html',
  styleUrls: ['./cadastro-professor.component.css']
})
export class CadastroProfessorComponent implements OnInit {

  public professorFormGroup: FormGroup

  constructor(private formBuilder: FormBuilder, private professorService: ProfessorService, private router: Router) {
    this.professorFormGroup = this.formBuilder.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required]
    })
  }

  ngOnInit() { }

  public cadastrar(): void {
    if (!this.professorFormGroup.valid) return
    console.log(this.professorFormGroup.value)
    this.professorService.post(this.professorFormGroup.value as Professor).subscribe({
      next: (value: Professor) => {
        this.router.navigate(['/login'])
      }
    })
  }

}
