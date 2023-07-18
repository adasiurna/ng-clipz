import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = {
    email: '',
    password: ''
  }
  inSubmission = false
  showAlert = false
  alertMsg = 'Please wait! You are being logged in.'
  alertColor = 'blue'
  
  constructor(private auth: AngularFireAuth) {}

  async login() {
    this.showAlert = true
    this.alertMsg = 'Please wait! You are being logged in.'
    this.alertColor = 'blue'
    this.inSubmission = true

    try {
      await this.auth.signInWithEmailAndPassword(
        this.credentials.email, this.credentials.password
      )
    } catch(e) {
      console.error(e)

      this.alertMsg = 'Error, please try again later aligator.'
      this.alertColor = 'red'
      this.inSubmission = false
      return
    }

    this.alertMsg = 'Great success! You have successfuly logged in.'
    this.alertColor = 'green'
  }
}
