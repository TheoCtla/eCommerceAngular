import { Component, Input } from '@angular/core';
import { Product } from '../models/product.model';
import { NgIf, NgStyle, NgFor } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [NgIf, NgStyle, NgFor],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() myProduct!: Product;

  onAddLike() {
    if (this.myProduct.isLiked)
      this.myProduct.likes--;
    else {
      this.myProduct.likes++;
    }
    this.myProduct.isLiked = !this.myProduct.isLiked;
  }
}
