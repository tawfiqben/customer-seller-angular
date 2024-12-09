import { Component, OnInit, signal } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { SignupService } from '../service/signup.service';
import { merge } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-signup',
  standalone: false,

  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {

  userDetailFormGroup!: FormGroup;

  readonly email = new FormControl('', [Validators.required, Validators.email]);

  errorMessage = signal('');
  constructor(private fb: FormBuilder, private signupService: SignupService, private router: Router) {
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }

  ngOnInit(): void {
    this.userDetailFormGroup = this.fb.group({
      username: this.fb.control(''),
      password: this.fb.control(''),
      email: this.fb.control(''),
      role: this.fb.control('')

    });
  }

  saveUser() {
    let formData: FormData = new FormData();
    formData.set('username', this.userDetailFormGroup.value.username);
    formData.set('password', this.userDetailFormGroup.value.password);
    formData.set('email', this.userDetailFormGroup.value.email);
    formData.set('role', this.userDetailFormGroup.value.role);

    this.signupService.saveUser(formData).subscribe(
      {
        next: value => {
          alert('Regustration successfully !')
          this.router.navigateByUrl("/admin")
        },
        error: err => {
          console.log(err);
        }
      }
    );

  }

  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage.set('You must enter a value');
    } else if (this.email.hasError('email')) {
      this.errorMessage.set('Not a valid email');
    } else {
      this.errorMessage.set('');
    }
  }
  
  /*public signupForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    role: new FormControl('', [Validators.required])
  })
*/
}
