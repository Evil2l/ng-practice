import { Component } from '@angular/core'
import { ActivatedRoute, Router} from '@angular/router';
import {LoginService} from "./login.service";

@Component({
    // template: require('./login-form.component.html')
    template: `

    <h2>login</h2>
    <div>
        <input type="text" name="user" [(ngModel)]="user" placeholder="login">
        <input type="text" name="password" [(ngModel)]="password" placeholder="password">
        <button (click)="submit()">Ok</button>
    
    
    </div>
    
`
})

export class LoginFormComponent{
    user = '';
    password = '';



    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private loginService: LoginService){

    }

    submit(){
       if(this.loginService.login(this.user, this.password)){
           const destination = this.route.snapshot.queryParams['destination'] || '/';

           this.router.navigateByUrl(destination);
       }
    }
}