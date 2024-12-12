import { Component, OnInit } from '@angular/core';
import {TrabalhoService} from "../../app-core/servicos/trabalho-service.service";
import {Trabalho} from "../../app-core/model/trabalho";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
declare var $ : any;

@Component({
  selector: 'app-visualizar-trabalhos',
  templateUrl: './visualizar-trabalhos.component.html',
  styleUrls: ['./visualizar-trabalhos.component.css']
})

//Injeção de dependencia, no qual o trabalho-service esta injetado aqui;
//Quem gerencia a lógica do formulário;

export class VisualizarTrabalhosComponent implements OnInit {

  i: number =0;
  trabalhos: Trabalho [] =[]; //Lista onde os dados serão armazenados
  form: FormGroup;

  constructor(private tarefaService: TrabalhoService,
              private fb: FormBuilder) {
    this.trabalhos = tarefaService.populartabela();

  //Onde inicializa o formGroup
    this.form = this.fb.group({
      paciente: ['', Validators.required, Validators.minLength(5)],
      trabalho: ['', Validators.required],
      dataEntrada: ['', Validators.required],
      dentista: ['', Validators.required],
      procedimento: ['', Validators.required],
      dataSaida: ['', Validators.required],
      status: ['', Validators.required]});
  }

  addTrabalho(){ //Vai adicionar os trabalhos (baseado no trabalho-service)
    this.tarefaService.addTrabalho("TRABALHO " + this.i);
    this.i ++;
  }
  openModal(){
    $('#add-trabalho').modal('show');
  }
  closeModal(){
    $('#add-trabalho').modal('hide');
  }
  ngOnInit(): void {
  }

  salvarFormTrabalho() {
    console.log("DADOS DO NOVO TRABALHO: ", this.form.value);
  }
}
