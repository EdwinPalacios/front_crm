import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AuthStateService } from 'src/app/services/shared/auth-state.service';
import { TokenService } from 'src/app/services/shared/token.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;
  errors: any = null;

  constructor(
    public router: Router,
    public fb: FormBuilder,
    public authService: AuthService,
    private token: TokenService,
    private authState: AuthStateService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.email, Validators.max(500)]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.authState.userAuthState.subscribe((val) => {
      console.log(`Logged --> ${val}`);
      if (val) {
        this.router.navigate(['dashboard', 'profile']);
      }
    });
  }

  onSubmit() {
    this.authService.signin(this.loginForm.value).subscribe(
      (result) => {
        this.responseHandler(result);
      },
      (error) => {
        this.errors = error.error;
      },
      () => {
        this.authState.setAuthState(true);
        this.loginForm.reset();
        this.router.navigate(['dashboard', 'profile']);
      }
    );
  }

  // Handle response
  responseHandler(data: any) {
    this.token.handleData(data.authorization.token);
  }
}
