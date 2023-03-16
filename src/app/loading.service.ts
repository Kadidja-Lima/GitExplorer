import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
   loading =  new BehaviorSubject<boolean>(false); //Este serviço cria um BehaviorSubject chamado loading, que pode ser usado para monitorar o estado de loading em toda a aplicação.

   show() {
    this.loading.next(true);

  }

   hide() {
    this.loading.next(false);

  }

  get():Observable<boolean>{
    return this.loading.asObservable()
  }
}
