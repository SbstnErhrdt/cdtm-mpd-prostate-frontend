import {Injectable} from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  activeUser = null;

  debug: boolean = localStorage.getItem('debug') === '*';


  constructor(private jwtHelper: JwtHelperService) {
    this.setActiveUser();
  }

  tokenNotExpired() {
    const token: string = localStorage.getItem('access_token');
    return token != null && !this.jwtHelper.isTokenExpired(token);
  }

  loggedIn() {
    return this.tokenNotExpired();
  }

  setActiveUser() {
    if (localStorage.getItem('access_token') && this.tokenNotExpired()) {
      this.activeUser = this.jwtHelper.decodeToken(localStorage.getItem('access_token'));
      console.log("[USER]", this.activeUser);
    }
  }

  removeActiveUser() {
    localStorage.removeItem('access_token');
    this.activeUser = null;
  }


}
