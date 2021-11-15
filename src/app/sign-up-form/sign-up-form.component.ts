import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { FormUtils } from "../shared/form.utils";

@Component({
  selector: 'sign-up-form',
  templateUrl: 'sign-up-form.component.html'
})
export class SignUpFormComponent {
  userForm: FormGroup
  formUtils: FormUtils

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      passwordConfirmation: [null, Validators.required ]
    }, { validator: this.passwordConfirmationValidator })

    this.formUtils = new FormUtils(this.userForm)
  }

  signUpUser() {
    console.log("Formulario de SignUp enviado")
    console.log("===>", this.userForm.value)
  }

  passwordConfirmationValidator(userForm: FormGroup) {
    if(userForm.get('password')?.dirty && userForm.get('password')?.value === userForm.get('passwordConfirmation')?.value)
      userForm.get('passwordConfirmation')?.setErrors(null)
    else
      userForm.get('passwordConfirmation')?.setErrors({'mismatch': true})
  }

}