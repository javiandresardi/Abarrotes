import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  carritoJSON:any;
  constructor(private dataService: DataService) {
    this.carritoJSON = this.dataService.getCarrito();
   }

  ngOnInit() {
  }

  updateProductosStock(){
    this.dataService.updateProductsStock(this.carritoJSON);
 }

}
