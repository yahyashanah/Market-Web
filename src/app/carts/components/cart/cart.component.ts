import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor(){ }
  cartProducts:any[] = []
  ngOnInit(): void {
    this.getCartProducts()
  }

  getCartProducts(){
    if('cart' in localStorage){
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!)
    }
    console.log(this.cartProducts)
  }

}

