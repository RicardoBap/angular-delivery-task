import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthService } from "../shared/auth.service";

import { FormUtils } from "../shared/form.utils";

@Component({
  selector: 'sign-up-form',
  templateUrl: 'sign-up-form.component.html'
})
export class SignUpFormComponent {
  userForm: FormGroup
  formUtils: FormUtils

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService) {

      this.setupForm()
      this.formUtils = new FormUtils(this.userForm)
  }

  signUpUser() {
    console.log("Formulario de signUp enviado")
    console.log("===>", this.userForm.value)

    this.authService.signUp(this.userForm.value)
      .then(() => {
        this.router.navigate(['/dashboard'])
      })
      .catch(erro => {
        console.log("++++++++ ERRO +++++++++", erro)
      })
  }

  // **************************************************************
    // this.authService.signUp(this.userForm.value)
    //   .subscribe(
    //     response => { alert('Parabéns sua conta foi criada com sucesso!')}
    //     //this.router.navigate(['/dashboard'])
    //   )
    //************************************ */ 

  setupForm() {
    this.userForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      password_confirmation: [null, Validators.required ]
    }, { validator: this.passwordConfirmationValidator }) 
  }

  passwordConfirmationValidator(userForm: FormGroup) {
    if(userForm.get('password')?.dirty && userForm.get('password')?.value === userForm.get('password_confirmation')?.value)
      userForm.get('password_confirmation')?.setErrors(null)
    else
      userForm.get('password_confirmation')?.setErrors({'mismatch': true})
  }

}
