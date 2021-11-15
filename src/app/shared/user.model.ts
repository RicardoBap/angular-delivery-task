export class User {
  email: string
  password: string
  passwordConfirmation: string
  id?: Number

  constructor(email: string, password: string, passwordConfirmation: string, id?: Number) {
    this.email = email
    this.password = password
    this.passwordConfirmation = passwordConfirmation
    this.id = id
  }

}