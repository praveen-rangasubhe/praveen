import { Component, OnInit } from '@angular/core';
import { json } from 'body-parser';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  empData: any;
  constructor(private service: ServiceService) {}

  ngOnInit(): void {
    console.log(this.service.api);
    this.service.getConfig().subscribe((res) => {
      console.log(res);
      this.empData = res;
    });
  }
}
