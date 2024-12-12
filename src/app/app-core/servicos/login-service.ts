import {Injectable} from '@angular/core';
import {Usuario} from "../model/usuario";
//Gerencia a lista de trabalhos e adiciona trabalhos;
//Este será injetado no Vizualizar-trabalhos;
//Pode ser injetado em mais do que um componente;
@Injectable({
  providedIn: 'root'
})

export class LoginService{
  private usuario: any;

  private listaDeUsuarios: String[] = []; //Variável que armazena a lista de usuarios

  private usuarios: Usuario[] = []; //Variável que vai armazenar os novos logins


  constructor() {
    this.usuario = new Usuario('','',0);
    this.usuario.email = 'diulhana14@gmail.com';
    this.usuario.senha = '1234';
  }

  addLogin(log: string){ //Vai adicionar trabalhos
    this.listaDeUsuarios.push(log);
    console.log("CONTAS ADICIONADAS", this.listaDeUsuarios);
  }

  populartabela(): Usuario[]{ //Lista para popular a tabela;
    let t: Usuario = new Usuario('andreia77@gmail.com','111111', 0);

    this.usuarios.push(t); //push envia
    return this.usuarios;
  }

  //Para testar o login informado
  login(usuario: any){
    console.log("error: ", this.usuario);
    if(usuario.email == this.usuario.email){
      if(usuario.senha === this.usuario.senha){
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}
