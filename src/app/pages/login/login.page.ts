import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone:false
})
export class LoginPage implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private router:Router) { }

  ngOnInit() {
  }

    onLogin() {
      this.router.navigateByUrl('/home'); // après login, redirection
/*

    if (this.email === 'admin@test.com' && this.password === '1234') {
      console.log('✅ Connexion réussie');
      this.router.navigateByUrl('/home'); // après login, redirection
    } else {
      console.log('❌ Identifiants invalides');
    }
      */
  }
    
}
