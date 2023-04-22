import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CadastroProfessorComponent } from './cadastro-professor.component'
import { RouterModule, Routes } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

const routes: Routes = [
  { path: '', component: CadastroProfessorComponent }
]


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,   
    RouterModule.forChild(routes)
  ],
  declarations: [CadastroProfessorComponent],
  exports: [CadastroProfessorComponent]
})
export class CadastroProfessorModule { }
