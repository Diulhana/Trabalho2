import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../app-core/model/usuario";
import {FormGroup, FormBuilder} from "@angular/forms";
import {Validators} from "@angular/forms";
import {LoginService} from "../../app-core/servicos/login-service";
import {Router} from "@angular/router";
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  ngOnInit(): void {}

  i: number = 0;
  usuarios: Usuario [] = [];
  form: FormGroup;

  constructor(private loginServ: LoginService, private fb: FormBuilder, private router: Router) {
    this.usuarios = loginServ.populartabela();

    this.form = this.fb.group({
      email: ['', Validators.required],
      senha: ['', Validators.required]});
  }

  onSubmit() {//Para limpar os dados do html
    if(this.form.valid){
      let usuario: any = new Object();
      usuario.email = this.form.value.email;
      usuario.senha = this.form.value.senha;
      console.log(this.loginServ.login(usuario));
      if(this.loginServ.login(usuario)){
        this.router.navigate(['/pagina-inicial']);
      } else{
        Swal.fire('Erro', 'Seu e-mail ou senha estão incorretos!', 'warning');
        this.form.reset();
      }
    }
  }
}
