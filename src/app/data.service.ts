import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class DataService {
  carritoArray: any = []
  carritoTotal: number = 0;
  constructor(private http: Http, public router: Router) { }

  getProducts() {
    let promesa = new Promise((resolve, reject) => {
      this.http.get('https://www.gstatic.com/firebasejs/5.0.4/firebase.js')
        .subscribe(
          (data: Response) => {
            resolve({ productos: JSON.parse(data["_body"]) });
          }
        )
    })

    return promesa;
  }

  getProducto(index: string) {
    return this.http.get(`https://www.gstatic.com/firebasejs/5.0.4/firebase/${index}.json`);
  }

  addProductoToCarrito(product: any) {
    this.carritoTotal = this.carritoTotal + product.subtotal;
    this.carritoArray.push(product);
  }

  getCarrito() {
    return this.carritoArray;
  }

  updateProductsStock(shoppingCartJSON) {
    for(let i=0; i<shoppingCartJSON.length; i++){
      let index = shoppingCartJSON[i].product.index;
      let stock = shoppingCartJSON[i].product.stock - shoppingCartJSON[i].quantity;
      let data = {
        stock : stock
      }
      this.http.patch(`https://www.gstatic.com/firebasejs/5.0.4/firebase/${index}.json`, JSON.stringify(data)).subscribe(() => {
        this.carritoArray = [];
        this.carritoTotal = 0;
        document.getElementById("badge").innerHTML = '';
        this.router.navigate(['/home/catalogo']);
      });
    }
  }

}
