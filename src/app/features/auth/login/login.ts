import {Component, inject} from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {MessageModule} from 'primeng/message';
import {MessageService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, InputTextModule, ToastModule, ButtonModule, MessageModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  messageService = inject(MessageService);
  private router = inject(Router);

  loginForm: FormGroup;

  formSubmitted = false;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required]]
    });
  }


  onSubmit() {
    this.formSubmitted = true;
    if (this.loginForm.valid) {
      this.messageService.add({severity: 'success', summary: 'Success', detail: 'Form Submitted', life: 3000});
      this.loginForm.reset();
      this.formSubmitted = false;
      this.router.navigate(['home']);

    }
  }

  isInvalid(controlName: string) {
    const control = this.loginForm.get(controlName);
    return control?.invalid && (control.touched || this.formSubmitted);
  }

}
