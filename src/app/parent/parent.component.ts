import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
import { Users } from '../Users';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  childName: string = 'Siddharth';
  newChildName: string = 'Viddharth';
  parentName = '';
  newParantName = '';
  public userList: Users[]=[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(res => {
      this.userList = res;
    });
  }

}
