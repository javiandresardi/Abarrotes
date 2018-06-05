import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  private productos:any = [];
  private productosQuantity:any = '';
  private productoJSON:any;
  private subtotal:number;
  private stock:number;
  constructor(private dataService: DataService) {
    this.dataService.getProducts().then((data)=>{
    this.productos = data["productos"];
   });
  }

  ngOnInit() {
  }

  addProductosTocarrito(producto, quantity){


     this.productosQuantity = document.getElementById('badge').textContent;
     document.getElementById("badge").innerHTML  = String(Number(this.productosQuantity) + 1);


     this.subtotal = producto.precio * quantity;
     this.stock = producto.stock - quantity;
     document.getElementById("unidadDisponible-"+producto.index).innerHTML = String(Number(this.stock));

     this.productoJSON = {
       producto : producto,
       quantity : quantity,
       subtotal : this.subtotal
     }

     this.dataService.addProductoToCarrito(this.productoJSON);

   }

 }
