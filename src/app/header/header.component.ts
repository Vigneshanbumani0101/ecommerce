import { Component, OnInit } from '@angular/core';

import { headerData } from '../model/constants'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public data = headerData;

  constructor() {}
  ngOnInit(): void {}
}
