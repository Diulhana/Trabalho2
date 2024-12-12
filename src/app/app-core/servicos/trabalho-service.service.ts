import {Injectable} from '@angular/core';
import {Trabalho} from '../model/trabalho';
//Gerencia a lista de trabalhos e adiciona trabalhos;
//Este será injetado no Vizualizar-trabalhos;
//Pode ser injetado em mais do que um componente;
@Injectable({
  providedIn: 'root'
})

export class TrabalhoService {
  private listaDeTrabalhos: String[] = []; //Variável que armazena a lista de trabalhos

  private trabalhos: Trabalho[] = []; //Variável que vai armazenar os novos trabalhos

  addTrabalho(trab: string){ //Vai adicionar trabalhos
    this.listaDeTrabalhos.push(trab);
    console.log("TRABALHOS ADICIONADOS", this.listaDeTrabalhos);
  }

  populartabela(): Trabalho[]{ //Lista para popular a tabela;
    let t: Trabalho = new Trabalho('Angelita', 'Protese Total Sup', '14/11/2024', 'Dr Felipe', 'Montagem', '14/11/2024', 'FINALIZADA', 0);
    let t2: Trabalho = new Trabalho('Joseane', 'Protocolo Inf', '05/11/2024', 'Dr Felipe', 'Dente + Barra', '20/11/2024', 'PROVA', 0);
    let t3: Trabalho = new Trabalho('Andreia', 'PPR Sup', '05/11/2024', 'Dr João', 'Armação + Cera', '20/11/2024', 'PROVA', 0);

    this.trabalhos.push(t, t2, t3); //push envia
    return this.trabalhos;
  }
}
