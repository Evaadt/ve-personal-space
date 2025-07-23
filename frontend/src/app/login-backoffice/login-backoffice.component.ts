import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';

import { AuthenticationService } from '../services/authentication/authentication.service';
import { MessageService } from 'primeng/api';

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
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthenticationService,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.formLogin = this.fb.group({
      username: new FormControl(null, [
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
     * Verifica se o formulario é valido e, caso seja, grava na consola o valor do formulario.
     * Caso o formulario nao seja valido, marca todos os campos como touchados.
     */
    if (this.formLogin.invalid) {
      this.formLogin.markAllAsTouched();
      return;
    }

    this.authService.loginByAuth(this.formLogin.value).subscribe((res) => {
      console.log(res);
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: res.message,
      })
    this.router.navigate(['/back-office/home']);
    },
      (err) => {
        console.log(err);
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: err.message,
        })
      }
    )

    // console.log(this.formLogin.value);
  }
}
