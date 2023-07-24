import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})

export class AllProductsComponent implements OnInit {
  products:any[] = []
  categories:any [] = []
  cartProducts:any [] = []
  loading:boolean = false
  constructor(private service:ProductsService) {

  }
  ngOnInit(): void {
    this.getProducts()
    this.getCategories()
  }

  getProducts() {
    this.loading = true
    this.service.getAllProducts().subscribe((res:any) => {
      this.products = res;
      this.loading = false
    } , error => {
      this.loading = false
      alert("Error")
    })
  }

  getCategories() {
    this.loading = true
    this.service.getAllCategories().subscribe((res:any) => {
      this.categories = res;
      this.loading = false
    }, error => {
      this.loading = false
      alert("Error")
    })
  }

  filterCategory(event:any){
    let value = event.target.value;
    (value == "all") ? this.getProducts() : this.getProductCategory(value)
  }

  getProductCategory(keyword:string) {
    this.loading = true
    this.service.getProductByCategorie(keyword).subscribe((res:any) => {
      this.loading = false
      this.products = res;
    })
  }

  addToCart(event:any){
    if('cart' in localStorage){
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!)
      let exist = this.cartProducts.find(item => item.item.id == event.item.id)
      if(exist){
        alert("Product is already in your cart")
      }else{
      this.cartProducts.push(event)
      localStorage.setItem('cart', JSON.stringify(this.cartProducts))
      }
    } else{
      this.cartProducts.push(event)
      localStorage.setItem('cart' , JSON.stringify(this.cartProducts))
    }
  }
}
