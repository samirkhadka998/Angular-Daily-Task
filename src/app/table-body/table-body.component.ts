import { Component, OnInit, Input } from '@angular/core';
import { IStringFormat } from './../IStringModel';

@Component({
  selector: 'app-table-body',
  templateUrl: './table-body.component.html',
  styleUrls: ['./table-body.component.css'],
})
export class TableBodyComponent implements OnInit {
  tableHeader: IStringFormat[] = [];
  constructor() {}

  ngOnInit(): void {
    this.tableHeader = [
      { name: '#' },
      { name: 'Task' },
      { name: 'Edit' },
      { name: 'Remove' },
    ];
  }
}
