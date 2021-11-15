import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthService } from "../shared/auth.service";

import { FormUtils } from "../shared/form.utils";

@Component({
  selector: 'sign-in-form',
  templateUrl: 'sign-in-form.component.html'
})
export class SignInFormComponent {
  loginForm: FormGroup
  formUtils: FormUtils

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
    ) {
      this.setupForm()
      this.formUtils = new FormUtils(this.loginForm)
  }

  signInUser() {
    console.log("Formulario de signIn enviado")
    console.log("===>", this.loginForm.value)

    this.authService.signIn(this.loginForm.value)
      .then(() => {
        this.router.navigate(['/dashboard'])
      })
      .catch(erro => {
        console.log("++++++++ ERRO +++++++++", erro)
      })
  }

  setupForm() {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    })
  }

}