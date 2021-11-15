import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'sign-up-form',
  templateUrl: 'sign-up-form.compoenent.html'
})
export class SignUpFormComponent {
  userForm: FormGroup

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      passwordConfirmation: [null, Validators.required ]
    })
  }

  signUpUser() {
    console.log("Formulario de SignUp enviado")
    console.log("===>", this.userForm.value)
  }

}