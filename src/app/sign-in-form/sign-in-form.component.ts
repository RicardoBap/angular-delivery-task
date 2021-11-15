import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { FormUtils } from "../shared/form.utils";

@Component({
  selector: 'sign-in-form',
  templateUrl: 'sign-in-form.component.html'
})
export class SignInFormComponent {
  loginForm: FormGroup
  formUtils: FormUtils

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    })

  this.formUtils = new FormUtils(this.loginForm)
  }

  signInUser() {
    console.log("Formulario de signIn enviado")
    console.log("===>", this.loginForm.value)
  }

}