import {Component, LOCALE_ID, OnInit} from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProductCardComponent } from "./product-card/product-card.component";
import { Product } from './models/product.model';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');



@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, RouterOutlet, ProductCardComponent, NgFor],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'fr-FR'
  }]
})
export class AppComponent implements OnInit {
  products!: Product[];
  ngOnInit() {
    this.products = [
      new Product(
        "avions",
        "c'est un avion cool",
        "https://www.shutterstock.com/image-illustration/high-detailed-white-airliner-3d-600nw-720019705.jpg",
        100,
        0,
        false,
        ["S", "M", "L"]
      ),
      new Product(
        "avions",
        "c'est un avion cool",
        "https://www.shutterstock.com/image-illustration/high-detailed-white-airliner-3d-600nw-720019705.jpg",
        1006,
        0,
        false,
        ["S"]
      ),
      new Product(
        "avions",
        "c'est un avion cool",
        "https://www.shutterstock.com/image-illustration/high-detailed-white-airliner-3d-600nw-720019705.jpg",
        100,
        0,
        false,
      )
    ]
  }

}
