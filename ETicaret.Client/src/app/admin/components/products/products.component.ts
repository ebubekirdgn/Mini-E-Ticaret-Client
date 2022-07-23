import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { HttpClientService } from 'src/app/services/common/http-client.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseComponent implements OnInit {

  constructor(spinner: NgxSpinnerService,private httpClientService:HttpClientService) { 
    super(spinner)
  }

  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallSpinClockwiseFadeRotating)

    this.httpClientService.get({
      controller:"products"
    }).subscribe(data=> console.log(data));

   /* this.httpClientService.post({
      controller:"products"
    },
    {
      name:"Kalem",
      stock :100,
      price:15
    }).subscribe();*/

/*
    this.httpClientService.put({
      controller:"products"
    },
    {
      id:" 540930d7-3cda-4dee-b716-2dbe05f3085c",
      name:"Kalem",
      stock :1200,
      price:150
    }).subscribe();*/
   
/*   JSON PLACE HOLDER WEB SİTE'S JSON DATAS 
    this.httpClientService.delete({
      controller:"products"
    },"540930d7-3cda-4dee-b716-2dbe05f3085c").subscribe();
  this.httpClientService.get({
    baseUrl:"https://jsonplaceholder.typicode.com",
    controller:"posts"
  }).subscribe(a => console.log(a));
  */
  }
}