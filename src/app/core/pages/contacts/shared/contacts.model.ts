export class Contact {
  id?: number
  nome: string
  email: string
  telefone: string
  site: string | null
  mensagem: string

  constructor(nome: string, email: string, telefone: string, site: string, mensagem: string, id?: number) {
    this.nome = nome
    this.email = email
    this.telefone = telefone
    this.site = site
    this.mensagem = mensagem
    this.id = id
  }
}