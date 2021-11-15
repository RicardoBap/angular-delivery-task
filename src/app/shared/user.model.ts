export class User {
  email: string
  password: string
  passwordConfirmation: string
  id?: Number
  auth_token: string

  constructor(email: string, password: string, passwordConfirmation: string, id?: Number) {
    this.email = email
    this.password = password
    this.passwordConfirmation = passwordConfirmation
    this.id = id
  }

}