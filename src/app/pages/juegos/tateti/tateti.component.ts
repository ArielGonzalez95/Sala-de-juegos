import { Component, OnInit } from '@angular/core';
import { USER_STORAGE_KEY } from '@shared/constants/constant';

@Component({
  selector: 'app-tateti',
  templateUrl: './tateti.component.html',
  styleUrls: ['./tateti.component.css']
})
export class TatetiComponent implements OnInit {

  constructor() { }
  userActive =localStorage.getItem(USER_STORAGE_KEY);
  ngOnInit(): void {
  }

}
