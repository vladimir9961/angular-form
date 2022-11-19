import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  error_message: string;
  registerForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    repeat_password: new FormControl('', [Validators.required])
  })
  get username() {
    return this.registerForm.get('username');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    let password = this.registerForm.get('password');
    // Check if password includes atleast one special simbol
    const specialChars = `/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/`
    const isSpecialCharsPresent = specialChars.split('').some(char =>
      password?.value.includes(char))
    if (!isSpecialCharsPresent) {
      this.error_message = 'Password must contain atleast one simbol'
    }
    return password;
  }
  get repeat_password() {
    return this.registerForm.get('repeat_password');
  }

  loginUser() {
    console.log(this.registerForm.value)
    alert(`Hello "${this.registerForm.value.username}" You register successfully `)
  }
}
