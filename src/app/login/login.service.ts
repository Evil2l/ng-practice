export class LoginService{

    loggedIn = false;

    constructor(){

    }

    login(user, password){
        if(user && password){
            this.loggedIn = true;

        }
        return this.loggedIn;

    }


}