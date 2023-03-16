import { GitHubApiService } from './../GitHubApi.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { user } from '../home/user';
import { Router } from '@angular/router';
import { LoadingService } from '../loading.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  user?:user;

  formBusca: FormGroup = new FormGroup({
    username: new FormControl ('',[Validators.required]),
  });

  semtexto = false;

  constructor(
    private router: Router,
    private gitHubApiService: GitHubApiService,
    public loadingService: LoadingService,
    private route:ActivatedRoute
    ) {}


  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const username = params['user'];
      this.formBusca.get('username')?.setValue(username);
      console.log('Valor do parâmetro:', username);
    });
  }

  onSubmit(){

    this.semtexto=true;

    if (this.formBusca.invalid){
      console.log("Formulário inválido");
    } else {
        this.semtexto=false;
        const formvalue = this.formBusca.value;
        console.log(formvalue.username);
        this.loadingService.show();

        this.gitHubApiService.get(formvalue.username).subscribe(
        user => {this.goTo('/rotas/result', { user: formvalue.username })
        this.loadingService.hide()
        },
        error => {this.goTo('/rotas/not-found', { user: formvalue.username }),
        this.loadingService.hide()
        }
      );
    };
  }
  goTo(route:string, params: any) {
  this.router.navigate([route], { queryParams: params });
  }
}

