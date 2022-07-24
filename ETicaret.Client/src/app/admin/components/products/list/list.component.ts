import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['name', 'stock', 'price', 'createdDate','updatedDate'];
  dataSource: MatTableDataSource<{}> = null;
  
  ngOnInit(): void {
  }

}
/*
p.Id,
p.Name,
p.Price,
p.Stock,
p.CreatedDate,
p.UpdatedDate*/