import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-login-backoffice',
  standalone: true,
  imports: [
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    FloatLabelModule,
  ],
  templateUrl: './login-backoffice.component.html',
  styleUrls: ['./login-backoffice.component.css'],
})
export class LoginBackofficeComponent implements OnInit {
  formLogin!: FormGroup;
  value: any;
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.formLogin = this.fb.group({
      userName: new FormControl(null, [
        Validators.required,
        Validators.maxLength(50),
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  onSubmit(): void {
  /**
   * Verifica se o formulario eh valido e, caso seja, grava na consola o valor do formulario.
   * Caso o formulario nao seja valido, marca todos os campos como touchados.
   */
    // if (this.formLogin.invalid) {
    //   this.formLogin.markAllAsTouched();
    //   return;
    // }
    this.router.navigate(['/back-office/home']);
    console.log(this.formLogin.value);
  }
}
