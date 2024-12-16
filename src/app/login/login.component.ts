import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from '../services/authservice/authservice.service';
import { ToastrService } from 'ngx-toastr'; // ToastrService is used here, not ToastrModule
import { CommonModule } from '@angular/common'; // Use CommonModule for structural directives

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule, // For ngIf, ngFor, etc.
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthserviceService,
    private toastr: ToastrService // ToastrService is injected directly here
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // Getters for convenience
  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      const loginData = { userEmail: email, userPassword: password };

      this.authService.login(loginData).subscribe(
        (response) => {
          console.log('Login successful response:', response); // Debugging log
          const token = response.data.userToken;
          localStorage.setItem('authToken', token);
          // Customize toastr appearance using Tailwind classes
          this.toastr.success(response.message, 'Success', {
            positionClass: 'toast-top-right', // Default position for toastr
            timeOut: 5000, // Optional timeout
            progressBar: true, // Show a progress bar
            toastClass: 'bg-green-500 text-white p-4 rounded-lg shadow-lg', // Tailwind classes
            titleClass: 'font-bold text-lg',
            messageClass: 'text-sm',
          });
          console.log('Toastr success message triggered'); // Debugging log
          this.router.navigate(['/dashboard']);
        },
        (error) => {
          // console.log(error.error.message, error); // Debugging log
          this.toastr.error(error.error.message,'Error', {
            positionClass: 'toast-top-right', // Default position for toastr
            timeOut: 5000, // Optional timeout
            progressBar: true, // Show a progress bar
            toastClass: 'bg-red-500 text-white p-4 rounded-lg shadow-lg', // Tailwind classes
            titleClass: 'font-bold text-lg',
            messageClass: 'text-sm',
          });
        }
      );
    } else {
      this.toastr.warning('Please fill in all fields correctly.', 'Warning');
    }
  }
}
