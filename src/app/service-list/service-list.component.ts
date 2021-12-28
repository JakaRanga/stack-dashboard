import { Component, Input, OnInit } from '@angular/core';
import { Indexor } from '../indexor/indexor';
import { Service } from '../models/service.model';

@Component({
  selector: 'sd-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.scss']
})
export class ServiceListComponent extends Indexor<Service> implements OnInit {

  @Input() services: Service[] = [];

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.services = super.sortByIndex(this.services);
  }

  openService(service: Service): void {
    window.open(service.url, '_blank');
  }

}
