import { Component } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { HttpClient } from 'selenium-webdriver/http';
import { FormsModule } from '@angular/forms';
import { checkAndUpdateElementDynamic } from '@angular/core/src/view/element';
import { DOCUMENT } from '@angular/common';
import { HostListener } from '@angular/core';
import { $ } from 'protractor';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {


  http: any;
  // ez az összekötés
  // url: 'http://localhost:3000';

  userData: object = {
    username: '',
    email: '',
    password: ''
  };
  datas: any;
  bejelentkezve: Boolean = false;
  regisztralva: Boolean = false;

  // ModalTitle
  loginOrRegistrateTitle: string = this.regisztralva === false ? 'Regisztráció' : 'Bejelentkezés';

  /*
    constructor(public http: Http) {
      this.getUser();
      this.tooltip();
      $('footer').tooltip('show');
    }*/

  getUser() {
    this.http.get('http://localhost:3000', this.userData).subscribe(
      data => {
        console.log(data);
        this.errorHandling(data);
      });
  }

  errorHandling(res) {
    res = JSON.parse(res['_body']);
    if (res.error) {
      console.error('API error:' + JSON.stringify(res.error));
    } else {
      this.datas = res;
    }
  }

  register() {
    this.http.post('http://localhost:3000/register', this.userData).subscribe(
      data => {
        console.log(data);
        this.errorHandling(data);
      });
  }

  login() {
    this.http.post('http://localhost:3000/login', this.userData).subscribe(
      data => {
        console.log(data);
        this.bejelentkezve = true;
        this.errorHandling(data);
      });
  }

  logout() {
    this.http.get('http://localhost:3000/logout').subscribe(
      data => {
        console.log(data);
        this.bejelentkezve = false;
        this.errorHandling(data);
      });
  }
  /*
    tooltip() {
      $(function (): void {
        $('[data-toggle="tooltip"]').tooltip()
      });
    }*/
  /*

  @HostListener('window:scroll') onScroll() {
    let nav = document.querySelector('#main-menu');
    let top = document.body.scrollTop || document.documentElement.scrollTop;

      if (top !== 0) {
        nav.classList.add('fixed-top');
      } else {
        nav.classList.remove('fixed-top');
      }
    }

    showModal() {
    setTimeout(() => {
      $('#registrateOrLogin').modal('show');
    }, 3000);
  }*/

}
