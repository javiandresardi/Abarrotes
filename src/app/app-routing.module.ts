import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './home/productos/productos.component';
import { CarritoComponent } from './home/carrito/carrito.component';
import { CatalogoComponent } from './home/catalogo/catalogo.component';

const routes: Routes = [
   {path: '', component: LoginComponent},
   {path: 'home', component: HomeComponent, children: [
     {path: '', redirectTo: 'catalogo', pathMatch: 'full'},
     {path: 'catalogo', component: CatalogoComponent},
     {path: 'carrito', component: CarritoComponent},
     {path: 'productos/:index', component: ProductosComponent}
   ]}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }

export const app_routing = RouterModule.forRoot(routes, {useHash:true});
