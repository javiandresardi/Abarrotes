import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos:any = undefined;
  index:any = undefined;
  constructor(private route:ActivatedRoute,
              private dataService:DataService) {
                route.params.subscribe( parametros => {
                 dataService.getProducto( parametros['index'])
                 .subscribe( res => {
                   this.productos = res.json();
                 })
               })
           }

  ngOnInit() {
  }

}
