import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { Create_Product } from '../../../contracts/create_product';
import { List_Product } from '../../../contracts/list_product';
import { HttpClientService } from '../http-client.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private httpClientService: HttpClientService) { }

  create(product: Create_Product, successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void) {
    this.httpClientService.post({
      controller: "products"
    }, product)
      .subscribe(result => {
        successCallBack;
      }, (errorResponse: HttpErrorResponse) => {
        const _error: Array<{ key: string, value: Array<string> }> = errorResponse.error;
        let message = "";
        _error.forEach((v, index) => {
          v.value.forEach((_v, _index) => {
            message += `${_v}<br>`;
          });
        });
        errorCallBack?.arguments(message);
      });
  }

  async read(successCallBack : () => void,errorCallBack?: (errorMessage: string) => void): Promise<Observable<List_Product[]>> {

  const promiseData = this.httpClientService.get<List_Product[]>({
    controller:"products"
 })

  firstValueFrom(promiseData)
  .then(d => successCallBack())
  .catch((errorResponse: HttpErrorResponse) => errorCallBack?.arguments(errorResponse.message))
  return await promiseData;
  }
}


/*

Bu kodu dene
 async read(page: number = 0, size: number = 5): Promise<{totalCount: number; products: List_Product[]}> {
	var promiseData = new Promise<{ totalCount: number; products: List_Product[] }>((resolve, reject) => {
		resolve();
		this.httpClientService.get<{ totalCount: number; products: List_Product[] }>({
      controller: "products",
      queryString: `page=${page}&size=${size}` })
	});
	reject((errorResponse: HttpErrorResponse) => errorCallBack?.arguments(errorResponse.message));
	  
    return await promiseData;
  }

*/
