export class AtualizarStyle {
  setBackgroundBobyTelaLogin(): void {
    document.body.style.setProperty('--body-background-1', 'rgb(2, 0, 36)')
    document.body.style.setProperty('--body-background-2', 'linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 77, 121, 0.9360119047619048) 0%, rgba(0, 212, 255, 1) 100%)')
  }

  setBackgroundBobyTodasTelas(): void {
    document.body.style.setProperty('--body-background-1', 'white')
    document.body.style.setProperty('--body-background-2', 'white')
  }
}
