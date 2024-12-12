export class Usuario {
  id: number;
  email: string;
  senha: string;

  constructor(email: string, senha: string, id: number) {
    this.email = email;
    this.senha = senha;
    this.id = id;
  }
}
