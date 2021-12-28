import { Component, OnInit } from '@angular/core';
import { Service } from './models/service.model';
import { AssetsService } from './services/assets.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  services: Service[] = [];

  constructor(private assetsService: AssetsService) { }

  ngOnInit(): void {
    this.assetsService.getServices().subscribe(res => {
      this.services = res;
    })
  }
}
