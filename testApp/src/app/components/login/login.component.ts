import { Component, OnInit } from '@angular/core';
import { User } from '../../class/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario: User;

  constructor() {
    this.usuario = new User ('001',"Daniel","daniel@daniel.com","123456","Developer");
  }

  ngOnInit() {
    console.log(this.usuario.nombre);
  }

}
