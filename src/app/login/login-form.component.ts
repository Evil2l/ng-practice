import { Component } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { LoginService } from './login.service';

@Component({
    template: `

    <h2>Login</h2>
    <div class="row">
      <div class="form-group">
      
          <label for="login-user">Enter your email address</label>
          <input id="login-user" class="form-control" type="text" name="login-user" [(ngModel)]="user" placeholder="login">
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>

      </div>
      <div class="form-group">
  
          <label for="login-password">Enter your password here</label>
          <input id="login-password" class="form-control" type="text" name="login-password" [(ngModel)]="password" placeholder="password">
          
      </div>
      <button class="btn btn-primary" (click)="submit()">Ok</button>
      <a class="btn btn-success" routerLink="/sign">Sign In</a>
    </div>
    
`
})

export class LoginFormComponent {
    user = '';
    password = '';



    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private loginService: LoginService
    ) {}

    submit() {
       if (this.loginService.login(this.user, this.password)) {
           const destination = this.route.snapshot.queryParams['destination'] || '/';

           this.router.navigateByUrl(destination);
       }
    }
}
