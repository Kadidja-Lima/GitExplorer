import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { user } from './home/user';
import { userResult } from './result/userResult';

@Injectable({
  providedIn: 'root'
})
export class GitHubApiService {
  private apiURL = ("https://api.github.com/users/")

  constructor(private http: HttpClient) { }

  get(username:string): Observable<user> { // Função Get -  vai ter um observable vai escutar o retorno da requisição que é um objeto da interface
    return this.http.get<user>(`${this.apiURL}${username}`); // como é um evento de observação o angular precisa saber o q esta recebendo tbm vai passa o user
  }

  getRepos(username: string): Observable<userResult[]> {
    return this.http.get<userResult[]>(`${this.apiURL}${username}/repos`);
  }
}

