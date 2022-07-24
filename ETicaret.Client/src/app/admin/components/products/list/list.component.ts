import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { List_Product } from 'src/app/contracts/list_product';
import { AlertifyService } from 'src/app/services/admin/alertify.service';
import { ProductService } from 'src/app/services/common/product/models/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor() {}

  displayedColumns: string[] = ['name', 'stock', 'price', 'createdDate', 'updatedDate'];
  dataSource: MatTableDataSource<List_Product> = null;

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