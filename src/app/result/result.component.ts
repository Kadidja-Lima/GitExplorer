import { userResult } from './userResult';
import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { user } from './../home/user';
import { GitHubApiService } from '../GitHubApi.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit{
  user?:user;
  repositories?: userResult[];

  constructor(
    private route:ActivatedRoute,
    private gitHubApiService:GitHubApiService,
  ){}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const username = params['user'];
      this.gitHubApiService.get(username).subscribe(
        (user) => { //de sucesso é executado
          this.user = user;
          console.log(this.user);
          this.gitHubApiService.getRepos(username).subscribe(
            (repositories) => {
              this.repositories = repositories;
              console.log(this.repositories);
              this.repositories.sort((a, b) => b.stargazers_count - a.stargazers_count);
            },
          );
        },
      );
    });
  }

    onSearch(){

    }
}




