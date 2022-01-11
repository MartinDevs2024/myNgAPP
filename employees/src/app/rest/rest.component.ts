import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { RestService } from '../_services/rest.service';

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.scss']
})
export class RestComponent implements OnInit {
  users: User[] = [];
  firstName: any;
  p: number = 1;

  constructor(private restService: RestService ) { }

  ngOnInit(): void {
    this.restService.getData().subscribe((res) => {
      this.users = res;
    })
  }

  Search() {
    if(this.firstName == '') {
      this.ngOnInit()
    } else {
      this.users = this.users.filter(res => {
        return res.firstName.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase())
      })
    }
  }
  key : string = 'id';
  reverse: boolean = false;
  sort(key: any) {
    this.key = key;
    this.reverse = !this.reverse;
  }
}
