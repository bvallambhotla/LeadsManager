import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { USERS_GET } from '../../common/common.constants';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  signinForm = new FormGroup({
    email: new FormControl('ani@gmail.com', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('P@ssword', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(16),
      Validators.pattern('^(?=.*?[A-Z])(?=.*?[#?!@$%^&*-]).{0,}$'),
    ]),
  });

  get email() {
    return this.signinForm.get('email');
  }
  get password() {
    return this.signinForm.get('password');
  }

  constructor(private http: HttpClient, private router: Router) {}

  /**
   * Validates the credentials against the set of users
   */
  async signin() {
    const users: any = await this.http.get(USERS_GET).toPromise();
    if (users && users.some((x: any) => x.email == this.email!.value)) {
      // route to companies
      this.router.navigate(['/companies']);
    } else {
      // show error message
      alert('Login failed');
    }
  }
}
