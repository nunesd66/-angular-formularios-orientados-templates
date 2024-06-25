import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {
  url_API = 'https://viacep.com.br/ws/';

  constructor(private http: HttpClient) {}

  getConsultaCep(cep: string) {
    return this.http.get(`${this.url_API}/${cep}/json`);
  }

}
