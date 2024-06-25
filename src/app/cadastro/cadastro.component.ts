import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {ConsultaCepService} from "../service/consulta-cep.service";

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private router: Router, private consultaCepService: ConsultaCepService) { }

  ngOnInit(): void {
  }

  cadastrar(form: NgForm){
      return form.valid
          ? this.router.navigate(["sucesso"])
          : alert("Formulário inválido");
  }

  // @ts-ignore
  consultaCEP(event: any, f: NgForm) {
    const cep = event.target.value;

    if (cep !== '') {
      return this.consultaCepService.getConsultaCep(cep).subscribe(resultado => {
        console.log(resultado);
        this.populandoEndereco(resultado, f);
      });
    }
  }

  private populandoEndereco(dados: any, f: NgForm) {
    f.form.patchValue({
      endereco: dados.logradouro,
      complemento: dados.complemento,
      bairro: dados.bairro,
      cidade: dados.localidade,
      estado: dados.uf
    });
  }
}
