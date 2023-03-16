import { Component } from '@angular/core';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'app-rotas-component',
  templateUrl: './rotas-component.component.html',
  styleUrls: ['./rotas-component.component.css']
})
export class RotasComponentComponent {

  constructor(
    public loadingService: LoadingService
  ) {}
}
