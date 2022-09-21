import { Certificate } from './../../Person';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-certification-item',
  templateUrl: './certification-item.component.html',
  styleUrls: ['./certification-item.component.css']
})
export class CertificationItemComponent implements OnInit {
  @Input() certificate:Certificate;
  constructor() { }

  ngOnInit(): void {
  }

}
