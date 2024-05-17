import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-hook',
  templateUrl: './life-hook.component.html',
  styleUrls: ['./life-hook.component.scss'],
})
export class LifeHookComponent implements OnInit {
  revData: any;
  distroy: boolean = true;
  constructor() {
    // console.log('constructor called');
  }

  ngOnInit(): void {
    // console.log('ngOnInit called');
  }
  value: string = '';
  onSubmit(val: any) {
    this.value = val.value;
  }

  childData(event: any) {
    this.revData = event;
  }

  reset() {
    this.value = '';
  }

  destroy() {
    this.distroy = false;
  }
}
