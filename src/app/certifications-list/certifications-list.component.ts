import { Certificate } from './../Person';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-certifications-list',
  templateUrl: './certifications-list.component.html',
  styleUrls: ['./certifications-list.component.css']
})
export class CertificationsListComponent implements OnInit {

  certificates: Certificate[];
  constructor(private UserSrv: UserService) {
  }

  ngOnInit(): void {
    this.certificates = this.UserSrv.getPerson().getCertificates();
    console.log(this.certificates)
  }

}
